import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container text-black">
      <nav className="flex  justify-between items-center py-2 px-5">
        <div className="">
          <img src="" alt="" />
          <h2 className="">Positivus</h2>
        </div>

        <ul>
          <Link href=''>About Us</Link>
          <Link href=''>Services</Link>
          <Link href=''>Use Cases</Link>
          <Link href=''>Pricing</Link>
          <Link href=''>Blog</Link>
        </ul>
        <button className="border rounded-2xl">
          Request a quote
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
