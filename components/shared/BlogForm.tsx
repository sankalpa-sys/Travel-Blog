'use client'
import React, {useRef} from 'react';

function BlogForm() {
    const handleImageChange = () => {

    }

    const imageInput = useRef<HTMLInputElement>(null)
    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageInput}
                className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
            />
        </div>
    );
}

export default BlogForm;