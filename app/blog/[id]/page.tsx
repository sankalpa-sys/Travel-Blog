'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import Image from "next/image";
import {TBlog, TBlogs} from "@/typings";
import Badge from "@/components/shared/Badge";
import {Dot} from "lucide-react";
import {calculateReadingTime, formatDate} from "@/lib/utils";
import Spinner from "@/components/shared/Spinner";
import { Separator } from "@/components/ui/separator"
import Blogs from "@/components/shared/Blogs";

 function SingleBlogPage() {
    const params =  useParams()
    const blog: TBlog = useQuery(api.blogs.getBlogById, {
        blog_id: params.id as Id<"blogs">,
    });

     const relatedBlogs: TBlogs = useQuery(api.blogs.relatedBlogs, { category: blog?.category}) ?? [];
     const filteredBlogs = relatedBlogs.filter((b) => b._id !== blog?._id);
    console.log("blog", blog)
     if(blog === undefined){
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <Spinner />
            </div>
        )
     }
    return (
        <section className='pt-20 max-w-7xl mx-auto px-5 z-50'>
            <Image
                className='w-full object-cover h-60 rounded-2xl'
                src={blog?.banner}
                height={100}
                width={100}
                alt='blog'
                quality={100}
            />
            <div className='flex flex-col gap-5 md:flex-row items-start justify-between py-10'>
                <h1 className='text-3xl font-semibold md:w-1/2 text-balance text-yellow-600'>{blog?.title}</h1>
                <p className='md:w-[50%] text-gray-500 dark:text-gray-100'>{blog?.highlight}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center justify-between'>
                <div className='flex items-center text-sm'>
                    <Badge label={blog?.category}/>
                    <Dot/>
                    <p>{formatDate(blog?._creationTime)}</p>
                    <Dot/>
                    <p>{calculateReadingTime(blog?.description?.length)} min read</p>
                </div>
                <div className='flex items-center gap-2 py-4'>
                    <Image
                        className='rounded-full h-6 w-6 object-cover'
                        src='https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb'
                        alt='author'
                        height={100}
                        width={100}
                    />
                    <p className='text-sm font-semibold'>Sankalpa Neupane</p>
                </div>
            </div>
            <h3 className='text-xl font-bold py-5'>Blog Description</h3>
            <Separator />
            <p className='pt-10 pb-4 leading-8'>{blog?.description}</p>

                <Separator/>


            <div className='pt-4'>
                {filteredBlogs?.length > 0 && <h3 className='font-semibold text-xl'>Related Blogs</h3>}
                <Blogs showLoading={false} blogs={filteredBlogs}/>
            </div>
        </section>
    );
}

export default SingleBlogPage;