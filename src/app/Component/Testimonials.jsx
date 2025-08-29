"use client";

import React from "react";
import Slider from "react-slick";
import Heading from "./Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    id: "c4",
    name: "Emma Wilson",
    position: "CTO at TechWave",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: "c5",
    name: "David Lee",
    position: "COO at BrightFuture",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1, // default
    speed: 500,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300">
        <img src="/images/vectorIcon.png" alt="" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // tablets / small desktops
        settings: {
          centerPadding: "100px",
          slidesToShow: 1, // still one slide
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          centerPadding: "40px",
          slidesToShow: 1, // ✅ only one slide
          centerMode: false, // optional: disable centerMode on very small screens
        },
      },
      {
        breakpoint: 480, // extra small mobile
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          centerMode: false, // disable centering
        },
      },
    ],
  };

  return (
    <div className="container py-10">
      <Heading
        title={"Testimonials"}
        content={
          "Hear from Our Satisfied Clients: Read Our Testimonials to learn more about our Digital Marketing Services"
        }
      />

      <div className="relative p-20 bg-[#191A23] text-white rounded-2xl overflow-hidden">
        <Slider {...settings} className="px-6">
          {comments.map((c) => (
            <div key={c.id} className="px-3">
              <div className="flex flex-col p-6 rounded-xl items-center transition-all duration-500 ease-in-out">
                <p className="multi-lines pb-10 relative italic border-2 border-pri p-10 rounded-4xl text-sm md:text-base line-clamp-3 md:line-clamp-none">
                  “{c.text}”<span></span>
                </p>
                <div className="mt-4">
                  <p className="font-semibold pt-10 text-pri">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
