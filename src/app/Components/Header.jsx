"use client";
import Image from "next/image";
import React from "react";

const logos = [
  { title: "amazon", src: "/logo/amazon.png" },
  { title: "dribbble", src: "/logo/dribbble.png" },
  { title: "hubspot", src: "/logo/hubspot.png" },
  { title: "notion", src: "/logo/notion.png" },
  { title: "netflix", src: "/logo/netflix.png" },
  { title: "zoom", src: "/logo/zoom.png" },
];

const Header = () => {
  return (
    <div className="container lg:pt-[70px] px-5 md:px-0">
      <header className="flex flex-col md:flex-row gap-10 justify-between items-center ">
        <div className="w-full md:w-[531px] ">
          <h1 className="!text-6xl font-medium pb-8 leading-[120%]">
            Navigation the digital landscape for success
          </h1>
          <p className="leading-[28px] pb-[35px] w-100 ">
            Our digital marketing agency helps businesses grow and successed
            online through a range of services including SEO , PPC , social
            media marketing , and center creation.
          </p>
          <button className="bg-black text-white w-66 h-16 rounded-xl">
            Book a consultation{" "}
          </button>
        </div>
       <div className="w-full h-[400px] relative">
      <Image
        src="/Images/banner.png"
        alt="banner"
        fill
        className="object-contain rounded-xl"
        priority
      />
    </div>
      </header>

      <div className="py-16">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-5 justify-between items-center">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                alt={logo.title}
                width={100}
                height={40}
                className="mx-auto h-10 w-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
