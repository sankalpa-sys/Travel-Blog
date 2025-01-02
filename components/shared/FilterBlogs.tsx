import React from 'react';
import Badge from "@/components/shared/Badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



function FilterBlogs() {
    return (
        <div className='px-5 md:py-10 py-6'>
            <h2 className='text-2xl font-bold text-yellow-600'>Blogs</h2>
            <p className='text-gray-600 dark:text-gray-200 pt-2'>Here we share travel tips, destination guides and stories that inspire your next adventure</p>

            <div className='flex flex-col md:flex-row md:items-center justify-between pt-5 text-sm text-gray-600 dark:text-gray-200 font-semibold  gap-5'>
                <div className='max-w-screen overflow-scroll scrollbar-hide'>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account">All</TabsTrigger>
                            <TabsTrigger value="pasword">Destination</TabsTrigger>
                            <TabsTrigger value="passwrd">Culinary</TabsTrigger>
                            <TabsTrigger value="assword">Lifestyle</TabsTrigger>
                            <TabsTrigger value="pasword">Tips & Hacks</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className='flex items-center gap-5'>
                    <Select>
                        <SelectTrigger className="w-1/2 md:w-auto">
                            <SelectValue placeholder="Filter By" />
                        </SelectTrigger>
                        <SelectContent className=''>
                            <SelectItem value="New">Newest</SelectItem>
                            <SelectItem value="popular">Popular</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default FilterBlogs;