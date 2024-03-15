"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import Link from "next/link";
const Navbar = () => {
  const { setTheme } = useTheme();
  const [flag, setFlag] = useState(false);
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href={'/'} className="flex items-center">
        <Image
          width={50}
          height={50}
          src="/groww-logo-270.png"
          alt="groww image"
          className="w-8 h-8"
        />
        <div className="ml-4">
          <h1 className="hidden sm:block md:text-xl dark:text-white font-bold text-black">
            Ecommerce Cart - Groww
          </h1>
        </div>
      </Link>
      <div>
        {flag ? (
          <MdDarkMode
            onClick={() => {
              setFlag(!flag);
              setTheme("dark");
            }}
            size={25}
            className="cursor-pointer"
          />
        ) : (
          <CiLight
            onClick={() => {
              setFlag(!flag);
              setTheme("light");
            }}
            size={25}
            className="cursor-pointer"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
