'use client'
import CarausalWrapper from "@/components/shared/CarausalWrapper";
import FilterBlogs from "@/components/shared/FilterBlogs";
import Blogs from "@/components/shared/Blogs";
import {Suspense, useEffect, useState} from "react";
import {TBlogCategory, TBlogs, TFilter} from "@/typings";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

export default function Home() {
    const [category, setCategory] = useState<TBlogCategory>("All");
    const [filter, setFilter] = useState<TFilter>("newest");
    const blogs: TBlogs = useQuery(api.blogs.getBlogsByCategory, {
        category,
    }) ?? [];
    const handleCategoryChange = (cat: TBlogCategory) => {
        setCategory(cat);
    }

    const handleFilterChange = (value: TFilter) => {
        setFilter(value);
    }
    return (
        <main>
            <CarausalWrapper/>
            <FilterBlogs handleFilterChange={handleFilterChange} handleCategoryChange={handleCategoryChange}/>
            <Blogs blogs={blogs}/>
        </main>
    );
}
