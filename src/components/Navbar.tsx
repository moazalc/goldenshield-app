"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [language, setLanguage] = useState("");
  return (
    <nav className="fixed top-0 left-0 w-full  z-50 ">
      {/* LOGO  */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </Link>

        {/* Navbar Links  */}
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="#about"
              className="relative text-white hover:text-yellow-500 transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all 
             after:duration-300 hover:after:w-full"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="relative text-white hover:text-yellow-500 transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all 
             after:duration-300 hover:after:w-full"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="relative text-white hover:text-yellow-500 transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all 
             after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="relative text-white hover:text-yellow-500 transition 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all 
             after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>

          {/* Language Selector  */}
          {/* <li>
            <Select>
              <SelectTrigger className="w-[68px] bg-white">
                <SelectValue placeholder="EN" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="ar">AR</SelectItem>
              </SelectContent>
            </Select>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
