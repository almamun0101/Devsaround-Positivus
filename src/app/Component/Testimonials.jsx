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
];

const Testimonials = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1,
    speed: 500,
    arrows: true, // enable arrows
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300">
        <img src="/images/vectorIcon.png" alt="" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: true,
          customPaging: (i) => (
            <div className="w-3 h-3 rounded-full bg-gray-500" />
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          dots: true,
          customPaging: (i) => (
            <div className="w-3 h-3 rounded-full bg-gray-500" />
          ),
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

      <div className="relative p-10 bg-[#191A23] text-white rounded-2xl overflow-hidden">
        <Slider {...settings} className="px-6">
          {comments.map((c) => (
            <div key={c.id} className="px-3">
              <div className="flex flex-col p-6 rounded-xl items-center transition-all duration-500 ease-in-out">
                <p className="multi-lines pb-10 relative italic border-2 border-pri p-10 rounded-4xl text-sm md:text-base line-clamp-3 md:line-clamp-none">
                  “{c.text}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold pt-4 text-pri">{c.name}</p>
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

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-0 bottom-100 transform `}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-0 top-1/2 transform -translate-y-1/2`}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

export default Testimonials;
