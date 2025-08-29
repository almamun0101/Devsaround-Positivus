import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Heading from "./Heading";

const services = [
  {
    title: "Search Engine Optimization",
    titleBg: "bg-pri dark:bg-pri-dark",
    bg: "bg-gray dark:bg-gray-dark",
    learn: "text-black dark:text-white",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/service1.png",
  },
  {
    title: "Pay-per-click Advertising",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-pri dark:bg-pri-dark",
    learn: "text-black dark:text-white",
    arrow: "bg-pri text-black dark:bg-pri-dark dark:text-white",
    img: "/service2.png",
  },
  {
    title: "Social Media Marketing",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-black dark:bg-black-dark",
    learn: "text-white dark:text-gray-300",
    arrow: "bg-black text-gray dark:bg-black-dark dark:text-gray-300",
    img: "/service3.png",
  },
  {
    title: "Email Marketing",
    titleBg: "bg-pri dark:bg-pri-dark",
    bg: "bg-gray dark:bg-gray-dark",
    learn: "text-black dark:text-white",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/service4.png",
  },
  {
    title: "Content Creation",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-pri dark:bg-pri-dark",
    learn: "text-black dark:text-white",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/service5.png",
  },
  {
    title: "Analytics and Tracing",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-black dark:bg-black-dark",
    learn: "text-white dark:text-gray-300",
    arrow: "bg-black text-gray dark:bg-black-dark dark:text-gray-300",
    img: "/service6.png",
  },
];

const Services = () => {
  return (
    <section className="container py-10 md:py-16 px-5 lg:px-0 dark:text-white">
      {/* Heading */}
      <Heading
        title="Services"
        content="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {services.map((service, index) => (
          <article
            key={index}
            className={`border p-5 md:p-12 rounded-4xl flex items-center justify-between lg:gap-4 shadow-[0_10px_0_0_rgba(0,0,0,1)] overflow-hidden ${service.bg}`}
          >
            {/* Left side content */}
            <div className="w-full md:w-55">
              <h3
                className={`px-2 !font-bold rounded-sm inline leading-10 ${service.titleBg}`}
              >
                {service.title}
              </h3>

              {/* Learn More */}
              <Link
                href="#"
                className="pt-6 flex gap-4 items-center"
                aria-label={`Learn more about ${service.title}`}
              >
                <BsArrowUpRightCircleFill
                  size={35}
                  className={`rounded-full ${service.arrow}`}
                />
                <p className={`hidden md:block text-lg ${service.learn}`}>
                  Learn More
                </p>
              </Link>
            </div>

            {/* Right side image */}
            <div className="flex-shrink-0">
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col md:flex-row justify-between items-center rounded-4xl w-full relative bg-gray p-10 dark:bg-gray-dark">
        <div>
          <h2 className="text-2xl font-bold">Let's Make Things Happen</h2>
          <p className="py-6 md:w-[500px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black dark:bg-white text-white dark:text-black rounded-2xl px-10 py-5 text-xl">
            Get Your Free Proposal
          </button>
        </div>
        <div className="relative">
          <Image
            src="/Images/Frame1.png"
            alt="Contact us illustration"
            width={400}
            height={400}
            className="hidden lg:block absolute -top-20 right-10 object-contain w-full md:w-130"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
