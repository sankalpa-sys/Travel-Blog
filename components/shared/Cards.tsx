import React from 'react';
import {ArrowRight, GlobeLock} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

function Cards() {
    return (
        <section className='flex flex-col md:flex-row items-center px-5 my-10 h-[30rem] gap-5 max-w-7xl mx-auto'>
            <div className='space-y-5 h-full'>
                <div className='relative rounded-2xl flex h-1/2  items-center p-5 text-white bg-[url("https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-center bg-cover '>
                    <div className="content z-50">
                        <GlobeLock/>
                        <h2 className='text-3xl font-semibold pt-4 pb-2'>Explore more to get your comfort zone</h2>
                        <p className=''>Book your perfect stay with us</p>
                        <Button className='mt-4 bg-white text-black'>Book Now <ArrowRight/></Button>
                    </div>
                    <div className='absolute inset-0 bg-black/30 rounded-2xl z-20'/>
                </div>
                <div className='relative rounded-2xl flex h-[calc(15rem-1.25rem)] items-center p-5 text-white bg-[url("https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-center bg-cover '>
                    <div className="content z-50">
                        <p className='pb-4'>Article Available</p>
                        <h2 className='text-3xl font-semibold pb-2'>78</h2>
                    </div>
                    <div className='absolute inset-0 bg-black/30 rounded-2xl z-20'/>
                </div>
            </div>
            <div className='relative h-full rounded-2xl flex-1 flex justify-center items-center p-5 text-white bg-[url("https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-center bg-cover '>
                <h2 className='text-3xl font-semibold pb-2 text-balance z-50'>Beyond acommodation, creating memories of a lifetime</h2>
                <div className='absolute inset-0 bg-black/50 rounded-2xl z-20'/>
            </div>
        </section>
    );
}
// https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800

export default Cards;


function Card({children, backgroundImage}: {children: React.ReactNode, backgroundImage: string}) {
    return (
        <div className='relative rounded-md'>
            <Image
                src={backgroundImage}
                alt='card'
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute inset-0 bg-black/40'/>
          <div className='h-96 z-50 text-white'>
              {children}
          </div>
        </div>
    );

}