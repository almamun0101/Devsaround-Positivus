import React from "react";

const Header = () => {
  return (
    <div className="container pt-[70px] px-5">
      <header className="flex justify-between items-center ">
        <div className="w-full">
          <h1 className="text-6xl font-medium pb-8 leading-[100%]">Navigation the digital landscape for success</h1>
          <p className="leading-[28px] pb-[35px]">
            Our digital marketing agency helps businesses grow and successed
            online through a range of services including SEO , PPC , social
            media marketing , and coneter creation.
          </p>
          <button className="bg-black text-white w-66 h-17 rounded-xl">Book a consultation </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
