type TBlog = {
    title: string;
    highlight: string;
    description: string;
    category: TBlogCategory;
    userId: string;
    readTime: string;
    banner: string;
    _id: string;
    _creationTime: number;
};

type TBlogs = Blog[];

export type TBlogCategory = 'All' | 'Destination' | 'Culinary' | 'Lifestyle' | 'Tips & Hacks';
export type TFilter = "newest" | "oldest";