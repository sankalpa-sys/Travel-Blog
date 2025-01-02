import React from 'react';
import Form from "next/form";
import {Search} from "lucide-react";
import {ThemeToggler} from "@/components/shared/ThemeToggler";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {Button} from "@/components/ui/button";

function Header() {
    return (
        <header className='absolute w-full z-20 top-0 hidden md:flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
            <section id='left' className= 'flex items-center gap-10'>
                <Link href='/'>
                    <div className='font-bold text-2xl flex items-center text-yellow-600 gap-2 italic'>
                        <h4>Q</h4>
                        <h1>Quest</h1>
                    </div>
                </Link>
                    <nav className='flex gap-5 text-sm text-white font-semibold'>
                       <Link href='/'>Hotel</Link>
                       <Link href='/'>Flight</Link>
                       <Link href='/'>Train</Link>
                       <Link href='/'>Travel</Link>
                       <Link href='/'>Car Rental</Link>
                    </nav>
            </section>

            <section className='flex-1'>
                <Form className='flex border rounded-full px-4 py-2 w-1/2 mr-auto ml-10 bg-transparent backdrop-blur-sm' action="/search">
                    <input className='outline-none h-full text-sm text-white bg-transparent rounded-lg flex-1 placeholder:text-gray-200' type="text" placeholder='Search destination...'/>
                    <Search className='h-4 w-4 text-white'/>
                </Form>
            </section>

            <section className='flex items-center gap-5'>
                <ThemeToggler/>
                <SignedIn>
                    <UserButton/>
                </SignedIn>

                <SignedOut>
                    <SignInButton mode='modal'>
                        <Button className='bg-yellow-600 hover:bg-yellow-700 rounded-lg text-white font-semibold'>Login</Button>
                    </SignInButton>
                </SignedOut>
            </section>
        </header>
    );
}

export default Header;