"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Dark";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container text-black py-5  dark:text-white">
      <nav className="flex  justify-between items-center py-2 px-5">
        <div className="">
          <Image
            src="/logo/Logo.png"
            width={200}
            height={100}
            alt="Company Logo"
            className="dark:brightness-0 dark:invert"
          />
        </div>

        <ul className="hidden md:flex gap-10 ">
          <Link href="">About Us</Link>
          <Link href="">Services</Link>
          <Link href="">Use Cases</Link>
          <Link href="">Pricing</Link>
          <Link href="">Blog</Link>
        </ul>
        <button className="hidden md:block border rounded-2xl w-[231px] h-[68px]">
          Request a quote
        </button>
        <ModeToggle />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden px-5 pb-5">
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Use Cases</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
          <Button className="mt-4 w-full border rounded-2xl">
            Request a quote
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
