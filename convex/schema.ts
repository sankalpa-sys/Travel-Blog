import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        userId: v.string(),
    })
        .index("by_user_id", ["userId"])
        .index("by_email", ["email"]),
    blogs: defineTable({
        title: v.string(),
        description: v.string(),
        highlight: v.string(),
        banner: v.string(),
        readTime: v.string(),
        category: v.union(
            v.literal("All"),
            v.literal("Culinary"),
            v.literal("Lifestyle"),
            v.literal("Tips & Hacks"),
            v.literal("Destination")
        ),
        userId: v.string(),
    })
})