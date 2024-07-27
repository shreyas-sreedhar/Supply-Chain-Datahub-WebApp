import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative overflow-hidden">
            <div className="relative w-full mx-auto max-w-7xl">
                <div className="relative flex flex-col w-full p-5 mx-auto lg:px-8 md:flex-row md:items-center md:justify-between md:px-6">
                    <div className="flex flex-row items-center justify-between text-sm text-black lg:justify-start">
                        <Link href="/">
                            <div className="flex items-center">
                                <span className="text-xl md:text-2xl italic font-semibold tracking-tighter">
                                    Supply Chain Hub
                                </span>
                            </div>
                        </Link>
                        <button
                            className="md:hidden p-2 text-black focus:outline-none focus:text-black hover:text-[#0000ff]"
                            onClick={() => setOpen(!open)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                    <nav
                        className={`flex-col items-center flex-grow ${
                            open ? 'flex' : 'hidden'
                        } md:flex md:flex-row md:justify-end md:pb-0 md:space-x-6 mt-4 md:mt-0`}
                    >                
                        <Link href="https://github.com/Supply-Chain-Data-Hub/full-stack-hiring-takehome" target='_blank'>
                            <div className="py-2 text-sm font-medium text-black hover:text-black/50">Assignment</div>
                        </Link>
                        <Link href="/docs">
                            <div className="py-2 text-sm font-medium text-black hover:text-black/50">Docs</div>
                        </Link>
                        <Link href='https://github.com/shreyas-sreedhar/SCDH-FSD'>
                            <div className="active:bg-fuchsia-50 active:text-black bg-[#0000ff]/5 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none group hover:bg-[#0000ff]/5 hover:text-[#0000ff] justify-center px-6 py-2 rounded-full text-[#0000ff] text-sm">
                                Github Repo &nbsp; →
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    )
}