import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="bg-black text-white py-20 rounded-t-4xl px-20">
        <nav className="flex  justify-between items-center py-2 px-5">
          <div className="">
            <Image
              src="/logo/bottomlogo.png"
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
          <div className="flex items-center justify-between gap-5">
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
          <div className="flex flex-col items-start gap-4 justify-start  mb-4 md:mb-0">
            <h2 className="!text-lg font-semibold bg-pri text-black px-2 rounded-sm">Contact Us :</h2>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>

          {/* Right side: Email input and Subscribe button */}
          <div className="bg-[#292A32] p-20 rounded-xl">

          <form className="flex gap-2 justify-between w-full md:w-auto ">
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
      </div>
    </div>
  );
};

export default Footer;
