import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container text-black py-5">
      <nav className="flex  justify-between items-center py-2 px-5">
        <div className="">
          <img src="" alt="" />
          <h2 className="font-bold text-3xl">Positivus</h2>
        </div>

        <ul className="hidden md:flex gap-10 ">
          <Link href=''>About Us</Link>
          <Link href=''>Services</Link>
          <Link href=''>Use Cases</Link>
          <Link href=''>Pricing</Link>
          <Link href=''>Blog</Link>
        </ul>
        <button className="hidden md:block border rounded-2xl w-[231px] h-[68px]">
          Request a quote
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
