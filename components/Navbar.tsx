"use client"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
 
    return (
        <>
            <div className="hidden md:block"> 
                <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full px-4 z-50 flex justify-center items-center">
                    <ul className="navlinks w-full max-w-4xl justify-between h-18">
                        <div className="text-gray-200 text-3xl font-bold">{"<ACDev />"}</div>
                        <div className="flex gap-11">
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#home">Home</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#about">About</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#projects">Projects</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#contact">Profile</a></li>
                        </div>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50">
                <div className="flex items-center justify-between px-4 py-3 bg-black/40 backdrop-blur-xl">
                    <div className="text-gray-200 text-2xl font-bold">{"<ACDev />"}</div>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {/* Hamburger icon */}
                        {!menuOpen ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="bg-black/70 backdrop-blur-xl border-b border-white/10 px-4 pb-4">
                        <ul className="flex flex-col gap-7 pt-2">
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#home" onClick={() => setMenuOpen((prev) => !prev)}>Home</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#about" onClick={() => setMenuOpen((prev) => !prev)}>About</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#projects" onClick={() => setMenuOpen((prev) => !prev)}>Projects</a></li>
                            <li className="text-gray-300 text-xl"><a className="hover:text-gray-100" href="#contact" onClick={() => setMenuOpen((prev) => !prev)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;