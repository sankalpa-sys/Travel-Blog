import React from 'react';
import BlogForm from "@/components/shared/BlogForm";
import Image from "next/image";

function AddBlogPage() {
    return (
        <main className='pb-20 pt-32 max-w-7xl mx-auto px-5'>
            <Image
                className='h-64 w-full object-cover rounded-2xl object-center'
                src="https://www.vivaanadventure.com/wp-content/uploads/2020/11/Manung-Kot-1080x540.jpg"
                width={1600}
                height={800}
                alt="Travel"
            />
            <h1 className='text-2xl font-bold pt-10'>Tell us about your travel story</h1>
            <p className='text-gray-400 text-sm'>Unleash your adventures and inspire the world with your travel stories.</p>
            <section className='flex gap-10 pt-10'>
                <BlogForm/>
            </section>
        </main>
    );
}

export default AddBlogPage;