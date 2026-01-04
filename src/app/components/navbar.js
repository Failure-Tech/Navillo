"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = new useRouter();

    return (
        <nav className="w-full flex items-center justify-between px-6 py-4">
            {/* Left section: Logo and Typography */}
            <div className="flex items-center space-x-2 hover:cursor-pointer" onClick={() => router.push("/")}>
                {/* <Image 
                    src="/navillo_labs_logo.png"
                    alt="navillo logo"
                    width={60}
                    height={60}
                /> */}
                {/* <Image 
                    src="/navillo_labs_logo_typography.png"
                    alt="navillo logo typography"
                    width={120}
                    height={40}
                /> */}
            </div>

            {/* Center: Navigation Links */}
            <ul className="flex space-x-8 transition">
                <li className="font-inter cursor-pointer hover:text-[#E37633] hover:duration-300" onClick={() => router.push("/product")}>Product</li>
                {/* <li className="font-inter cursor-pointer hover:text-[#E37633] hover:duration-300" onClick={() => router.push("/vision")}>Vision</li> */}
                <li className="font-inter cursor-pointer hover:text-[#E37633] hover:duration-300" onClick={() => router.push("/pricing")}>Pricing</li>
                <li className="font-inter cursor-pointer hover:text-[#E37633] hover:duration-300" onClick={() => router.push("/blog")}>Blog</li>
                {/* <li className="font-inter cursor-pointer hover:text-[#E37633] hover:duration-300" onClick={() => router.push("/contact")}>Contact</li> */}
            </ul>

            {/* Right: Get Started Button */}
            <button onClick={() => router.push("/product")} className="font-inter cursor-pointer text-white bg-[#1E1E1E] rounded-full px-6 py-2">
                Get Started
            </button>
        </nav>
    );
};

export default Navbar;
