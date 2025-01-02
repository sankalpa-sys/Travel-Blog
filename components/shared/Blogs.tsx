'use client'
import React from 'react';
import BlogCard from "@/components/shared/BlogCard";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import Spinner from "@/components/shared/Spinner";
import {TBlog, TBlogs} from "@/typings";

function Blogs({blogs, showLoading = true}: {blogs: TBlogs, showLoading?: boolean}) {
    if(blogs.length === 0 && showLoading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-5 max-w-7xl mx-auto'>
            {blogs.map((blog: TBlog)=> (
                <BlogCard key={blog._id} blog={blog}/>
            ))}
        </div>
    );
}

export default Blogs;