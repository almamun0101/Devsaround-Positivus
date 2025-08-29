"use client";

import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const studies = [
  {
    text: "For a local restaurant we implemented a targeted PC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales .",
  },
  {
    text: "For a B2B software company , we developed an SEO strategy that resulted in a first page ranking for key keywords and 200% increase in organic traffic",
  },
  {
    text: "For a national retail chain , we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales. ",
  },
];

const Studies = () => {
  // Slider settings (for mobile only)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="container lg:py-20">
      {/* Heading */}
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start items-center py-10 text-center lg:text-left">
        <h2 className="bg-pri rounded-lg p-3 text-3xl font-medium">
          Case Studies
        </h2>
        <p className="w-full lg:w-[580px]">
          Explore Real-life Examples of Our Proven Digital Marketing Success
          Through Our Case Studies
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 justify-between items-center rounded-4xl w-full relative bg-black text-white text-left lg:p-15">
        {studies.map((study, index) => (
          <div
            className={`flex justify-between flex-col gap-10 w-70 mx-auto p-5 text-lg ${
              index !== studies.length - 1 ? "border-r" : "border-0"
            }`}
            key={index}
          >
            <p>{study.text}</p>
            <Link
              href=""
              className="flex items-center gap-5 text-pri text-lg"
            >
              Learn More <MdArrowOutward />
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-black text-white p-10 rounded-xl flex flex-col gap-10"
            >
              <p>{study.text}</p>
              <Link
                href=""
                className="flex items-center gap-5 text-pri text-lg"
              >
                Learn More <MdArrowOutward />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Studies;
