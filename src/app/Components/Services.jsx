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
    arrow: "bg-pri",
    img: "./service2.png",
  },
  {
    tittle: "Social Media Marketing",
    tittleBg: "bg-gray",
    bg: "bg-black",
    learn: "text-white",
    arrow: "bg-gray",
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
    arrow: "bg-gray",
    img: "./service6.png",
  },
];

const Services = () => {
  return (
    <div className="container pt-17">
      {/* Heading */}
      <div className="flex gap-12 justify-start items-center py-10">
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

        {
            ServicesDetails.map((service,index)=>(

        <div className="border p-12 rounded-4xl flex items-center justify-between">
          {/* Left side content */}
          <div className="">
            <h3 className="w-45 pb-23">{service.tittle}</h3>
            {/* learn More */}
            <div className="flex gap-4 items-center">
              <BsArrowUpRightCircleFill
                size={30}
                className="bg-pri rounded-full"
              />
              <Link href="" className="text-lg">
                Learn More
              </Link>
            </div>
          </div>

          <div className="">{/* <img src="" alt="" /> */}</div>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default Services;
