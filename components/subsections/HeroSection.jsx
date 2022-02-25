import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import LottieAnimation from '../abstract/lottieanimation';
import {SparklesIcon} from '@heroicons/react/outline';

function HeroSection() {
    return (
        <section className="w-[100%] mt-[2vh] lg:mt-[2vh] xl:mt-[1vh] flex flex-row items-center">
            <div className="flex flex-col w-[100%] max-w-[90em] items-center justify-between my-auto mx-auto py-[3vh] lg:py-[7vh]">
                <div className='mx-auto self-center w-auto flex flex-row items-center justify-center'>
                    <LottieAnimation />
                </div>
                <div className='w-auto mt-[3vh] lg:mt-[.5vh]'>
                    <h1 className="text-[10vw] md:text-[4em] lg:text-[6.5vw] text-darkText dark:text-white font-extrabold tracking-tight leading-auto">The digital assets</h1>
                </div>
                <div className='w-auto lg:mt-[-2vh]'>
                    <h1 className="text-[10vw] md:text-[4em] lg:text-[6.5vw] text-darkText dark:text-white font-extrabold tracking-tight leading-auto"><span className="text-digiftBrandBlue" >world</span> simplified</h1>
                </div>
                <div className="w-[90%] md:w-[70%] lg:w-[40%] mt-[3vh]">
                    <p className='text-center leading-[2] font-medium text-prevalentText dark:text-white'>You can choose from a wide range of gift cards, ranging from well-known brands like Amazon and Itunes to local retailers like Shoprite and David Wej.</p>
                </div>
                <div className='w-[100%] flex flex-row items-center justify-center mt-[3vh] lg:mt-[6vh]'>
                    <Link href="/">
                        <a className="flex-row w-[80%] md:w-[50%] lg:w-[15%] flex bg-digiftBrandBlue py-[1.5em] lg:py-[1.25em] hover:rounded-[8px] transition duration-300 ease-in-out text-white rounded-[4px] px-[1em] text-[14px] items-center justify-center font-medium">Get Started <SparklesIcon className="w-[1.25em] ml-[1em]" /></a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
