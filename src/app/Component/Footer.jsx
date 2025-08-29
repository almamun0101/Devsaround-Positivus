"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="container">
      <div className="bg-black text-white py-20 rounded-t-4xl">
        {/* Top Navigation */}
        <nav
          className="flex flex-col md:flex-row justify-between items-center py-2 px-6 md:px-20 gap-5"
          aria-label="Footer Navigation"
        >
          {/* Logo */}
          <div>
            <Image
              src={theme !== "dark" ? "/logo/bottomlogo.png" : "/logo/Logo.png"}
              width={200}
              height={100}
              alt="Positivus Company Logo"
              priority
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-center md:text-left">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:underline">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center hover:bg-pri hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center hover:bg-pri hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center hover:bg-pri hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </nav>

        {/* Middle Section */}
        <div className="mx-auto py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Contact Info */}
          <address className="flex flex-col text-center md:text-left items-center md:items-start gap-2 not-italic">
            <h2 className="!text-lg font-semibold bg-pri text-black px-2 rounded-sm">
              Contact Us :
            </h2>
            <p>
              <a href="mailto:info@positivus.com" className="hover:underline">
                info@positivus.com
              </a>
            </p>
            <p>
              <a href="tel:5555678901" className="hover:underline">
                555-567-8901
              </a>
            </p>
            <p>1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </address>

          {/* Newsletter */}
          <div className="bg-[#292A32] dark:bg-gray-800 p-6 md:p-10 rounded-xl w-full md:w-auto">
            <form
              className="flex flex-col md:flex-row gap-3"
              aria-label="Subscribe to Newsletter"
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pri w-full md:w-64"
                required
              />
              <button
                type="submit"
                className="bg-pri rounded-md text-black hover:bg-pri/90 px-4 py-2 font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 px-6 md:px-20">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Positivus
            </Link>
            . All Rights Reserved.
          </span>
          <span className="text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
