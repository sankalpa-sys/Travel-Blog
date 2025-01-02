import React from 'react';
import {cn} from "@/lib/utils";
import {TBlogCategory} from "@/typings";


const badgeStyles: Record<TBlogCategory, string> = {
    All: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Destination: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Culinary: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Lifestyle: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Tips & Hacks": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
};

interface BadgeProps {
    label: TBlogCategory;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <span
            className={cn(
                "text-xs font-medium me-2 px-2.5 py-1 rounded-full cursor-pointer hover:scale-105",
                badgeStyles[label] // No error because `label` is restricted to valid keys
            )}
        >
            {label}
        </span>
    );
};

export default Badge;
