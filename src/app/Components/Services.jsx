import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const services = [
  {
    title: "Search engine optimization",
    titleBg: "bg-pri",
    bg: "bg-gray",
    learn: "text-black",
    arrow: "bg-pri",
    img: "/service1.png",
  },
  {
    title: "Pay-per-click advertising",
    titleBg: "bg-gray",
    bg: "bg-pri",
    learn: "text-black",
    arrow: "bg-pri text-black",
    img: "/service2.png",
  },
  {
    title: "Social Media Marketing",
    titleBg: "bg-gray",
    bg: "bg-black",
    learn: "text-white",
    arrow: "bg-black text-gray",
    img: "/service3.png",
  },
  {
    title: "Email  Marketing",
    titleBg: "bg-pri",
    bg: "bg-gray",
    learn: "text-black",
    arrow: "bg-pri",
    img: "/service4.png",
  },
  {
    title: "Content Creation ",
    titleBg: "bg-gray",
    bg: "bg-pri",
    learn: "text-black",
    arrow: "bg-pri",
    img: "/service5.png",
  },
  {
    title: "Analytics and Tracing",
    titleBg: "bg-gray",
    bg: "bg-black",
    learn: "text-white",
    arrow: "bg-black text-gray",
    img: "/service6.png",
  },
];

const Services = () => {
  return (
    <div className="container py-10 md:py-17 px-5 lg:px-0">
      {/* Heading */}
      <div className="flex flex-wrap gap-12 justify-start items-center py-10">
        <h2 className="bg-pri rounded-lg p-2  text-3xl font-medium">
          Services
        </h2>
        <p className="lg:w-[580px]">
          At our digital marketing agency , we offer a range of Services to help
          businesses grow and succeed online . These services include:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 pb-15 md:pb-25">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border p-5 md:p-12 rounded-4xl flex  items-center justify-between gap-4 shadow-[0_10px_0_0_rgba(0,0,0,1)]  ${service.bg}`}
          >
            {/* Left side content */}
            <div className="w-full md:w-55">
              <h3
                className={` px-5 py-2 !font-bold rounded-sm inline leading-10 ${service.titleBg}`}
              >
                {service.title}
              </h3>
              {/* learn More */}
              <Link href="" className="pt-23 flex gap-4 items-center">
                <BsArrowUpRightCircleFill
                  size={35}
                  className={`rounded-full ${service.arrow}`}
                />
                <p className={`hidden md:block text-lg ${service.learn}`}>
                  Learn More
                </p>
              </Link>
            </div>


           {/* Right side */}
            <div className="flex-shrink-0">
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lets Happen */}
      <div className="flex flex-col md:flex-row justify-between items-center rounded-4xl w-full relative bg-gray p-15 ">
        <div className="">
          <h3>Lest Make things happen </h3>
          <p className="py-6 md:w-[500px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white  rounded-2xl px-10 py-5 text-xl ">
            Get your free proposal
          </button>
        </div>
        <div className="">
          <Image
            src="/happen.png"
            alt="happen"
            width={400}
            height={400}
            className="hidden lg:block absolute  -top-20 right-10 object-center w-full md:w-130"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
