import React, { useState } from "react";

export default function Menu() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full relative z-10 xs:bg-white md:bg-transparent xs:shadow-2xl md:shadow-none">
            <div className="justify-between mx-auto lg:w-4/5 md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                        <img src="LGS-logo.png" loading="lazy" alt="LGS Logo" class="h-16 xs:hidden md:block xs:pl-5 lg:pl-0" />
                        <img src="LGS-logo-dark.png" loading="lazy" alt="LGS Logo" class="h-16 md:hidden xs:pl-5 lg:pl-0" />
                        </a>
                        <div className="md:hidden">
                        <button
                                className="p-2 xs:text-primary xs:hover:text-primary-400 md:text-white rounded-md outline-none pr-4"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 xs:bg-white md:bg-transparent ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center md:flex text-lg font-exo font-semibold">
                            <li className="hover:bg-grey-50 md:hover:bg-transparent px-4 ease-in-out duration-150">
                                <a href="/" className="block py-3 text-grey-700 md:text-white hover:text-grey-900 md:hover:text-grey-100">
                                    Home
                                </a>
                            </li>
                            <li className="hover:bg-grey-50 md:hover:bg-transparent px-4 ease-in-out duration-150">
                                <a href="/About" className="block py-3 text-grey-700 md:text-white hover:text-grey-900 md:hover:text-grey-100">
                                    About
                                </a>
                            </li>
                            <li className="hover:bg-grey-50 md:hover:bg-transparent px-4 ease-in-out duration-150">
                                <a href="/Testimonials" className="block py-3 text-grey-700 md:text-white hover:text-grey-900 md:hover:text-grey-100">
                                    Testimonials
                                </a>
                            </li>
                            <li className="hover:bg-grey-50 md:hover:bg-transparent px-4 ease-in-out duration-150">
                                <a href="/Our-Work" className="block py-3 text-grey-700 md:text-white hover:text-grey-900 md:hover:text-grey-100">
                                    Our Work
                                </a>
                            </li>
                            <li className="hover:bg-grey-50 md:hover:bg-transparent px-4 ease-in-out duration-150">
                                <a href="/Contact" className="block py-3 text-grey-700 md:text-white hover:text-grey-900 md:hover:text-grey-100">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
