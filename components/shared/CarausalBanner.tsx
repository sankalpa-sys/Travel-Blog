'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";

function CarausalBanner() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
                duration: 100
            }}
            plugins={[
                Autoplay({
                    delay: 8000,
                }),
            ]}
            className="w-full h-[50vh] md:h-[80vh] overflow-hidden">
            <CarouselContent>
                <CarouselItem>
                    <div className="bg-[url('//image.tmdb.org/t/p/original/cCL6K9HISEp9ZgeQzt93cKspVkf.jpg')] bg-cover bg-center relative h-[50vh] md:h-[80vh] w-screen">
                        <div className='absolute left-5 md:bottom-20 bottom-10 text-white z-50'>
                            <h5 className='font-bold text-3xl pb-5 text-yellow-600'>Exploring the Wonders of Hiking</h5>
                            <p className='w-2/3'>An iconic landmarks, this post unveils the secrets that make this destination a traveler's paradise</p>
                            <SignedIn>
                                <Link href='/add'>
                                    <Button className='bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600  px-8 py-6 mt-4 text-white font-semibold'>
                                        ADD A BLOG NOW
                                        <ArrowRight/>
                                    </Button>
                                </Link>
                            </SignedIn>
                            <SignedOut>
                                <SignInButton mode='modal'>
                                    <Button className='bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600  px-8 py-6 mt-4 text-white font-semibold'>
                                        GET STARTED
                                        <ArrowRight/>
                                    </Button>
                                </SignInButton>
                            </SignedOut>
                        </div>

                        <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-900'/>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="bg-[url('//image.tmdb.org/t/p/original/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg')] bg-cover bg-center relative h-[50vh] md:h-[80vh] w-screen">
                        <div className='absolute left-5 md:bottom-20 bottom-10 text-white z-50'>
                            <h5 className='font-bold text-3xl pb-5 text-yellow-600'>Exploring the Wonders of Hiking</h5>
                            <p className='w-2/3'>An iconic landmarks, this post unveils the secrets that make this destination a traveler's paradise</p>
                        </div>

                        <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-900'/>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CarausalBanner;
