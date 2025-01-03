'use client'
import React, {useRef} from 'react';
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useMutation} from "convex/react";
import {api} from "@/convex/_generated/api";
import {TBlogCategory} from "@/typings";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const IMAGE = "https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=800"

const formSchema = z.object({
    title: z.string().min(10, {
        message: "Username must be at least 10 characters.",
    }),
    highlight: z.string().min(10, {
        message: "Highlight must be at least 10 characters.",
    }),
    description: z.string().min(330, {
        message: "Highlight must be at least 330 characters.",
    }),
    category: z.string().email({
        message: "Select a category",
    }),
})

function BlogForm() {
    const createBlog = useMutation(api.blogs.createBlog);
    const {user} = useUser()
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
            description: "",
            highlight: "",
            category: ""

        },
    });
    const handleImageChange = () => {

    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const blogId =  await createBlog({
            title: values.title,
            description: values.description,
            highlight: values.highlight,
            category: values.category as TBlogCategory,
            banner: IMAGE,
            readTime: "0",
            userId: user?.id as string
        })

        router.push(`/blog/${blogId}`)
    }

    const imageInput = useRef<HTMLInputElement>(null)
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Title</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />

                <FormField
                    control={form.control}
                    name="highlight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Highlight</FormLabel>
                            <FormControl>
                                <Input placeholder="Tell something catchy about your story" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a blog category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                    <SelectItem value="Culinary">Culinary</SelectItem>
                                    <SelectItem value="Tips & Hacks">Tips & Hacks</SelectItem>
                                    <SelectItem value="Destination">Destination</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea rows={5} placeholder="Describe your story" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={imageInput}
                    className="block max-w-fit text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                <Button className='w-full h-12 text-lg font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-white active:scale-95 transition-transform duration-300 ease-in-out' type="submit">Submit</Button>
            </form>
        </Form>
    );
}

export default BlogForm;