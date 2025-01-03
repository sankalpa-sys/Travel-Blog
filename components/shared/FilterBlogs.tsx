import React from 'react';
import Badge from "@/components/shared/Badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {TBlogCategory, TFilter} from "@/typings";

type Props = {
    handleCategoryChange: (category: TBlogCategory) => void;
    handleFilterChange: (filter: TFilter) => void;
}

function FilterBlogs({handleCategoryChange, handleFilterChange}: Props) {
    const categoryChangeHandler = (value: string | undefined) => {
        handleCategoryChange(value as TBlogCategory);
    }

    const filterChangeHandler = (value: TFilter) => {
        handleFilterChange(value);
    }
    return (
        <div className='px-5 md:py-10 py-6'>
            <h2 className='text-2xl font-bold text-yellow-600'>Blogs</h2>
            <p className='text-gray-600 dark:text-gray-200 pt-2'>Here we share travel tips, destination guides and stories that inspire your next adventure</p>

            <div className='flex flex-col md:flex-row md:items-center justify-between pt-5 text-sm text-gray-600 dark:text-gray-200 font-semibold  gap-5'>
                <div className='max-w-screen overflow-scroll scrollbar-hide'>
                    <Tabs onValueChange={categoryChangeHandler} defaultValue="All">
                        <TabsList>
                            <TabsTrigger value="All">All</TabsTrigger>
                            <TabsTrigger value="Destination">Destination</TabsTrigger>
                            <TabsTrigger value="Culinary">Culinary</TabsTrigger>
                            <TabsTrigger value="Lifestyle">Lifestyle</TabsTrigger>
                            <TabsTrigger value="Tips & Hacks">Tips & Hacks</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className='flex items-center gap-5'>
                    <Select onValueChange={filterChangeHandler}>
                        <SelectTrigger className="w-1/2 md:w-auto">
                            <SelectValue placeholder="Filter By" />
                        </SelectTrigger>
                        <SelectContent className=''>
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default FilterBlogs;