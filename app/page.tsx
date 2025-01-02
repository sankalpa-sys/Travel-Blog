'use client'
import CarausalWrapper from "@/components/shared/CarausalWrapper";
import FilterBlogs from "@/components/shared/FilterBlogs";
import Blogs from "@/components/shared/Blogs";
import {Suspense} from "react";
import {TBlogs} from "@/typings";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";

export default function Home() {
    const blogs: TBlogs = useQuery(api.blogs.getAllBlogs) ?? [];
    return (
        <main>
            <CarausalWrapper/>
            <FilterBlogs/>
            <Blogs blogs={blogs}/>
        </main>
    );
}
