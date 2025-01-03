import { v } from "convex/values";
import {mutation, query} from "./_generated/server";

export const getUrl = query({
    args: { storageId: v.id("_storage") },
    handler: async (ctx, { storageId }) => {
        return await ctx.storage.getUrl(storageId);
    },
});

export const generateUploadUrl = mutation(async (ctx) => {
    return await ctx.storage.generateUploadUrl();
});

export const updateBlogImage = mutation({
    args: {
        blogId: v.id("blogs"),
        storageId: v.union(v.id("_storage"), v.null()),
    },
    handler: async (ctx, { blogId, storageId }) => {
        await ctx.db.patch(blogId, {
            banner: storageId ?? undefined,
        });
    },
});
//
// export const deleteImage = mutation({
//     args: { storageId: v.id("_storage") },
//     handler: async (ctx, { storageId }) => {
//         await ctx.storage.delete(storageId);
//     },
// });