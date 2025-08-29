"use client";
import Image from "next/image";
import React from "react";
import CustomBtn from "./CustomBtn";

const logos = [
  { title: "amazon", src: "/logo/Company logo (0).png" },
  { title: "dribbble", src: "/logo/Company logo (1).png" },
  { title: "hubspot", src: "/logo/Company logo (2).png" },
  { title: "notion", src: "/logo/Company logo (3).png" },
  { title: "netflix", src: "/logo/Company logo (4).png" },
  { title: "zoom", src: "/logo/Company logo (5).png" },
];

const Header = () => {
  return (
    <div className="container lg:pt-[70px] px-5 md:px-0 text-black dark:text-white">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-[531px]">
          <h1 className="text-6xl font-medium pb-8 leading-[120%]">
            Navigation the digital landscape for success
          </h1>
          <p className="leading-[28px] pb-[35px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social
            media marketing, and content creation.
          </p>
          <CustomBtn btn={"Book a consultation"}/>
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

      {/* Logos Section */}
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
               style={{
                  filter: "grayscale(100%)",
                  transition: "filter 0.3s ease, brightness 0.3s ease",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
