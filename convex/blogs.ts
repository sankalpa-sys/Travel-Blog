import { query } from "./_generated/server";
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