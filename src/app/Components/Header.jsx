"use client";
import React from "react";

const logos = [
  { tittle: "amazon", src: "./logo/amazon.png" },
  { tittle: "dribbble", src: "./logo/dribbble.png" },
  { tittle: "hubspot", src: "./logo/hubspot.png" },
  { tittle: "notion", src: "./logo/notion.png" },
  { tittle: "netflix", src: "./logo/netflix.png" },
  { tittle: "zoom", src: "./logo/zoom.png" },
];

const Header = () => {
  return (
    <div className="container lg:pt-[70px] px-5">
      <header className="flex flex-col md:flex-row gap-10 justify-between items-center ">
        <div className="w-full md:w-[531px] ">
          <h1 className="text-6xl font-medium pb-8 leading-[100%]">
            Navigation the digital landscape for success
          </h1>
          <p className="leading-[28px] pb-[35px]">
            Our digital marketing agency helps businesses grow and successed
            online through a range of services including SEO , PPC , social
            media marketing , and coneter creation.
          </p>
          <button className="bg-black text-white w-66 h-17 rounded-xl">
            Book a consultation{" "}
          </button>
        </div>
        <div className="">
          <img src="./Images/banner.png" alt="banner" className="w-full" />
        </div>
      </header>

      <div className="pt-17">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-5 justify-between items-center">
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.tittle} className="w-40" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
