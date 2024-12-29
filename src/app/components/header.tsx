'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation'

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Workspaces', path: '/workspaces' },
      ];

    return (
        <>
        <nav className="bg-white border-gray-200 dark:bg-white dark:border-white sticky top-0 z-50">
        <div className="w-full flex flex-wrap items-center justify-between mx-1% p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                    src="/log-removebg-preview.png"
                    alt="Textutor Logo"
                    width={35}
                    height={38}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">TextutorAI</span>
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-white focus:outline-none  dark:text-white-400 dark:hover:bg-white-700 " aria-controls="navbar-multi-level" aria-expanded={menuOpen}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
             
            <div className={`w-full md:block md:w-auto transition-transform duration-300 ease-in-out ${menuOpen
      ? "opacity-100 scale-100 visible mb-[0px] md:opacity-100 md:scale-100 md:visible md:mb-0"
      : "opacity-0 scale-95 invisible mb-[-175px] md:opacity-100 md:scale-100 md:visible md:mb-0"
  }`} id="navbar-multi-level"> 
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
                    
                    <li>
                        <Link href="/" className={`${pathname === "/" ? 'block py-2 px-3 text-black-900 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 dark:bg-gray-600 md:dark:bg-transparent bg-gray-700' : ' block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent'} `} aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={`${pathname === "/about" ? 'block py-2 px-3 text-black-900 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 dark:bg-gray-600 md:dark:bg-transparent bg-gray-700' : ' block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent'} `}>About</Link>
                    </li>
                    <li>
                        <Link href="/workspaces" className={`${pathname === "/workspaces" ? 'block py-2 px-3 text-black-900 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 dark:bg-gray-600 md:dark:bg-transparent bg-gray-700' : ' block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-black md:dark:hover:text-gray-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent'} `}>Workspaces</Link>
                    </li>
                    
                </ul>
            </div>

        </div>
        </nav>
        </>
    );
};

export default Header;
