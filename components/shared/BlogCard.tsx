import React from 'react';
import Image from "next/image";
import {Dot} from "lucide-react";
import {calculateReadingTime, formatDate, truncateText} from "@/lib/utils";
import {TBlog} from "@/typings";
import Badge from "@/components/shared/Badge";
import Link from "next/link";
import {useStorageUrl} from "@/lib/getImageUrl";

function BlogCard({blog}: {blog: TBlog}) {
    const imageUrl = useStorageUrl(blog?.banner);
    return (
        <Link href={`/blog/${blog._id}`}>
            <article className='relative rounded-2xl cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out'>
                <div className='relative'>
                    <Image className='rounded-2xl max-h-60 object-cover' src={imageUrl}
                           alt='blog'
                           width={100}
                           height={100}
                           layout='responsive'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-700/30 to-gray-500/30 rounded-2xl'/>
                </div>
                <div className='text-gray-600 dark:text-gray-300 flex items-center py-2 text-sm'>
                    <p>{formatDate(blog?._creationTime)}</p>
                    <Dot/>
                    <p>{calculateReadingTime(blog?.description?.length)} min read</p>
                </div>

                <h2 className='text-xl font-semibold pt-2 text-yellow-600'>{blog?.title}</h2>
                <p className='text-gray-600 dark:text-gray-300 text-sm py-2'>{truncateText(blog?.highlight)}</p>

                <div className='flex items-center gap-2 py-2'>
                    <Image
                        className='rounded-full h-6 w-6 object-cover'
                        src='https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb'
                        alt='author'
                        height={100}
                        width={100}
                    />
                    <p className='text-sm font-semibold'>Sankalpa Neupane</p>
                </div>
                <div className='absolute top-3 left-3'>
                    <Badge label={blog?.category}/>
                </div>
            </article>
        </Link>
    );
}

export default BlogCard;