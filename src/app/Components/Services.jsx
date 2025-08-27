import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ServicesDetails = [
  {
    tittle: "Search engine optimization",
    tittleBg: "bg-pri",
    bg: "bg-gray",
    learn: "text-black",
    arrow: "bg-pri",
    img: "./service1.png",
  },
  {
    tittle: "Pay-per-click advertising",
    tittleBg: "bg-gray",
    bg: "bg-pri",
    learn: "text-black",
    arrow: "bg-pri text-black",
    img: "./service2.png",
  },
  {
    tittle: "Social Media Marketing",
    tittleBg: "bg-gray",
    bg: "bg-black",
    learn: "text-white",
    arrow: "bg-black text-gray",
    img: "./service3.png",
  },
  {
    tittle: "Email  Marketing",
    tittleBg: "bg-pri",
    bg: "bg-gray",
    learn: "text-black",
    arrow: "bg-pri",
    img: "./service4.png",
  },
  {
    tittle: "Content Creation ",
    tittleBg: "bg-gray",
    bg: "bg-pri",
    learn: "text-black",
    arrow: "bg-pri",
    img: "./service5.png",
  },
  {
    tittle: "Analytics and Tracing",
    tittleBg: "bg-gray",
    bg: "bg-black",
    learn: "text-white",
    arrow: "bg-black text-gray",
    img: "./service6.png",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {ServicesDetails.map((service, index) => (
          <div
            key={index}
            className={`border p-12 rounded-4xl flex items-center justify-between gap-4 shadow-[0_10px_0_0_rgba(0,0,0,1)]  ${service.bg}`}
          >
            {/* Left side content */}
            <div className="w-55">
              <h3 className={` px-2 !font-bold rounded-sm inline leading-8 ${service.tittleBg}`}>
                {service.tittle}
              </h3>
              {/* learn More */}
              <Link href="" className="pt-23 flex gap-4 items-center">
                <BsArrowUpRightCircleFill
                  size={35}
                  className={`rounded-full ${service.arrow}`}
                />
                <p  className={`hidden md:block text-lg ${service.learn}`}>
                  Learn More
                </p>
              </Link>
            </div>

            <div className="">
              <img src={service.img} alt={service.tittle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
