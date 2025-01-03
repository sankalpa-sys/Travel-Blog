import {mutation, query} from "./_generated/server";
import {v} from "convex/values";

export const getAllBlogs = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("blogs").collect();
    },
});

export const getBlogById = query({
    args: {
        blog_id: v.id("blogs"),
    },
    handler: async (ctx, {blog_id}) => {
        return await ctx.db.get(blog_id);
    },
})

export const relatedBlogs = query({
    args: {
        category: v.string(),
    },
    handler: async (ctx, { category }) => {
        // Fetch up to 3 blogs in the same category
        return await ctx.db
            .query("blogs")
            .filter((q) => q.eq(q.field("category"), category))
            .take(3); // Limit to 3 results
    },
});

export const getBlogsByCategory = query({
    args: { category: v.union(
            v.literal("All"),
            v.literal("Culinary"),
            v.literal("Lifestyle"),
            v.literal("Tips & Hacks"),
            v.literal("Destination")
        )
    },
    handler: async (ctx, { category }) => {
        if (category === "All") {
            // Fetch all blogs
            return await ctx.db.query("blogs").collect();
        } else {
            // Fetch blogs by specific category
            return await ctx.db.query("blogs").filter(q => q.eq(q.field("category"), category)).collect();
        }
    }
});


export const createBlog = mutation({
    args: {
        title: v.string(),
        highlight: v.string(),
        description: v.string(),
        category: v.union(
            v.literal("All"),
            v.literal("Culinary"),
            v.literal("Lifestyle"),
            v.literal("Tips & Hacks"),
            v.literal("Destination")
        ),
        userId: v.string(),
        readTime: v.string(),
        banner: v.string(),
    },
    handler: async (ctx, args) => {
        const blogId = await ctx.db.insert("blogs", { ...args});
        return blogId;
    },
});