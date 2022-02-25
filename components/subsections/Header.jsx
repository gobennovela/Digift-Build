import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, SearchIcon } from '@heroicons/react/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {

        if (!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <div className="bg-digiftGray rounded-full dark:bg-toogleBgDark">
                    <div className='p-[4px] rounded-full flex-row flex'>
                        <button className="md:flex font-medium justify-center flex-row items-center text-[14px] text-prevalentText px-[1em] py-[.8em rounded-full " role="button" onClick={() => setTheme('light')}>
                            <SunIcon className="w-[16px]" />
                        </button>
                        <button className="md:flex font-medium flex-row items-center text-[14px] bg-transparent text-prevalentText dark:bg-headerToggleDark dark:text-white px-[1em] py-[.8em] rounded-full ">
                            <MoonIcon className="w-[16px]" />
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="bg-digiftGray rounded-full">
                    <div className='p-[4px] rounded-full flex-row flex'>
                        <button className="md:flex font-medium justify-center flex-row items-center text-[14px] bg-white text-prevalentText dark:text-white px-[1em] py-[.8em] rounded-full">
                            <SunIcon className="w-[16px]" />
                        </button>
                        <button className="md:flex font-medium flex-row items-center text-[14px] text-prevalentText px-[1em] dark:text-white dark:bg-headerToggleDark py-[.8em] rounded-full" role="button" onClick={() => setTheme('dark')}>
                            <MoonIcon className="w-[16px]" />
                        </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <header className="w-[100%] border-b-[1.5px] border-digiftBorder/40 dark:border-headerToggleDark/25 flex z-[999] items-center justify-center top-0 sticky backdrop-blur-[8px]">
            <section className="w-[95%] max-w-[90em] py-[1em] flex flex-row lg:justify-between items-center mx-auto">
                <div className="w-[50%] lg:w-auto">
                    <h4 className="text-[1.25em] md:text-[1.5em] font-bold">Digift</h4>
                </div>
                <div className="py-[0.781em] lg:flex px-[1em] bg-digiftGray rounded-[0.25em] w-[40%] hidden flex-row dark:bg-toogleBgDark">
                    <SearchIcon className='w-[1.2em] mr-[0.5em] text-prevalentTextSecondary dark:text-prevalentTextSecondary/50' />
                    <input type="text" placeholder="Search" className=" outline-none bg-transparent text-prevalentText text-[0.875em] dark:text-white font-medium w-[100%]" />
                </div>

                <div className="flex flex-row lg:justify-evenly w-[95%] lg:w-[25%] justify-end">
                    <Link href="/">
                        <a className="flex-row hidden md:flex bg-digiftBrandBlue py-[0.871em] hover:rounded-[8px] transition duration-300 ease-in-out text-white rounded-[4px] px-[1em] text-[14px] w-[45%] items-center justify-center font-medium">Login <ArrowRightIcon className="w-[1em] ml-[1em] hidden md:flex" /></a>
                    </Link>
                    <Link href="/">
                        <a className="lg:flex flex-row hidden border-[2px] border-digiftBorder dark:border-headerToggleDark/25 bg-transparent text-prevalentText dark:text-white py-[0.871em] hover:rounded-[8px] transition duration-300 ease-in-out rounded-[4px] px-[1em] text-[14px] w-[45%] items-center justify-center font-medium">Sign up <ArrowRightIcon className="w-[1em] ml-[1em]" /></a>
                    </Link>
                </div>

                <div className="flex flex-row ml-[3vw] md:ml-[1.5em] lg:ml-[0em]">
                    {renderThemeChanger()}
                </div>
            </section>
        </header>
    );
}

export default Header;
