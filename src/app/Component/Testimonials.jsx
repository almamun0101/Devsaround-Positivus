"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Heading from "./Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const comments = [
  {
    id: "c1",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: "c2",
    name: "Sarah Johnson",
    position: "CEO at ABC Ltd",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: "c3",
    name: "Michael Brown",
    position: "Founder of StartupHub",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: "c3",
    name: "Michael Brown",
    position: "Founder of StartupHub",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: "c3",
    name: "Michael Brown",
    position: "Founder of StartupHub",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

const Testimonials = () => {
  const sliderRefDesktop = useRef(null);
  const sliderRefMobile = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    centerMode: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0%",
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0%",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0%",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-10">
      <Heading
        title="Testimonials"
        content="Hear from Our Satisfied Clients: Read Our Testimonials to learn more about our Digital Marketing Services"
      />

      {/* ===== Desktop Slider ===== */}
      <div className="hidden py-5 md:block relative bg-[#191A23] text-white rounded-2xl overflow-hidden">
        <Slider ref={sliderRefDesktop} {...settings} className="py-10">
          {comments.map((c) => (
            <div key={c.id} className="px-3">
              <div className="flex flex-col p-6 rounded-xl items-start transition-all duration-500 ease-in-out">
                <p className="multi-lines pb-10 relative italic border-2 border-pri p-10 rounded-4xl text-sm md:text-base line-clamp-3 md:line-clamp-none">
                  “{c.text}”<span></span>
                </p>
                <div className="mt-4 pl-12 text-left">
                  <p className="font-semibold pt-4 text-pri">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-10 mt-6 pb-10">
          <button
            onClick={() => sliderRefDesktop.current.slickPrev()}
            className="text-white p-3 rounded-full shadow-lg opacity-40 hover:opacity-100 hover:scale-105 transition"
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="flex gap-2 lg:gap-5">
            {comments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderRefDesktop.current.slickGoTo(idx)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <PiStarFourFill
                  size={20}
                  className={`rotate-45 ${
                    currentSlide === idx ? "text-[#B9FF66]" : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => sliderRefDesktop.current.slickNext()}
            className="text-white p-3 rounded-full shadow-lg opacity-40 hover:opacity-100 hover:scale-105 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* ===== Mobile Slider ===== */}
      <div className="md:hidden relative bg-[#191A23] text-white rounded-2xl overflow-hidden">
        <Slider ref={sliderRefMobile} {...settings2} className="py-10">
          {comments.map((c) => (
            <div key={c.id} className="px-3">
              <div className="flex flex-col p-6 rounded-xl items-start transition-all duration-500 ease-in-out">
                <p className="multi-lines pb-10 relative italic border-2 border-pri p-10 rounded-4xl text-sm md:text-base line-clamp-3 md:line-clamp-none">
                  “{c.text}”
                </p>
                <div className="mt-4 pl-12 text-left">
                  <p className="font-semibold pt-4 text-pri">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows + Dots */}
        <div className="flex items-center justify-center gap-10 mt-6 pb-10">
          <button
            onClick={() => sliderRefMobile.current.slickPrev()}
            className="text-white p-3 rounded-full shadow-lg opacity-40 hover:opacity-100 hover:scale-105 transition"
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="flex gap-2 lg:gap-5">
            {comments.map((_, idx) => (
              <button
                key={idx}
                onClick={() => sliderRefMobile.current.slickGoTo(idx)}
                className="w-6 h-6 flex items-center justify-center"
              >
                <PiStarFourFill
                  size={20}
                  className={`rotate-45 ${
                    currentSlide === idx ? "text-[#B9FF66]" : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => sliderRefMobile.current.slickNext()}
            className="text-white p-3 rounded-full shadow-lg opacity-40 hover:opacity-100 hover:scale-105 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
