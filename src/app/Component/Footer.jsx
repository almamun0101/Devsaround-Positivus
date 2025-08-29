import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="bg-black text-white py-20 rounded-t-4xl">
        <nav className="flex flex-col md:flex-row justify-between items-center py-2 px-5 gap-5">
          <div className="">
            <Image
              src="/logo/bottomlogo.png"
              width={200}
              height={100}
              alt="Company Logo"
              className="dark:brightness-0 dark:invert"
            />
          </div>

          <ul className="flex flex-col md:flex-row gap-10 ">
            <Link href="">About Us</Link>
            <Link href="">Services</Link>
            <Link href="">Use Cases</Link>
            <Link href="">Pricing</Link>
            <Link href="">Blog</Link>
          </ul>
          <div className="hidden md:flex items-center justify-between gap-5">
            <div className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center ">
              <FaLinkedinIn size={25} className="" />
            </div>
            <div className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center ">
              <FaFacebookF size={25} className="" />
            </div>
            <div className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center ">
              <FaTwitter size={25} className="" />
            </div>
          </div>
        </nav>

        <div className=" mx-auto py-20 px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left side: Contact Us */}
          <div className="flex flex-col text-center items-center md:items-start gap-4  md:justify-start  mb-4 md:mb-0">
            <h2 className="!text-lg font-semibold bg-pri text-black px-2 rounded-sm">
              Contact Us :
            </h2>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>

          {/* Right side: Email input and Subscribe button */}
          <div className="bg-[#292A32] p-20 rounded-xl px-2 min-w-full">
            <form className="flex flex-col md:flex-row  gap-2 justify-between w-full md:w-auto ">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2  rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pri text-white placeholder-white"
              />
              <button
                type="submit"
                className="bg-pri rounded-xl text-black hover:bg-blue-700 px-4 py-2 font-semibold"
              >
                Subscribe To news
              </button>
            </form>
          </div>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
       <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
        <span class="block text-sm text-white text-left sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Positivus</a>. All Rights Reserved.</span>
        <span class="block text-sm text-white text-left sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" class="hover:underline">Privacy Policy</a></span>
        </div> 
  
      </div>
    </div>
  );
};

export default Footer;
