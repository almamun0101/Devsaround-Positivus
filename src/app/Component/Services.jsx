"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Heading from "./Heading";
import { motion } from "framer-motion";

const services = [
  {
    title: "Search Engine Optimization",
    titleBg: "bg-pri dark:bg-pri-dark",
    bg: "bg-gray dark:bg-gray-dark",
    learn: "text-black dark:text-black",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/Images/service1.png",
  },
  {
    title: "Pay-per-click Advertising",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-pri dark:bg-pri-dark",
    learn: "text-black dark:text-white",
    arrow: "bg-pri text-black dark:bg-pri-dark dark:text-black",
    img: "/Images/service2.png",
  },
  {
    title: "Social Media Marketing",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-black dark:bg-black-dark",
    learn: "text-white dark:text-gray-300",
    arrow: "bg-black text-gray dark:bg-black-dark dark:text-gray-300",
    img: "/Images/service3.png",
  },
  {
    title: "Email Marketing",
    titleBg: "bg-pri dark:bg-pri-dark",
    bg: "bg-gray dark:bg-gray-dark",
    learn: "text-black dark:text-black",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/Images/service4.png",
  },
  {
    title: "Content Creation",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-pri dark:bg-pri-dark",
    learn: "text-black dark:text-black",
    arrow: "bg-pri dark:bg-pri-dark",
    img: "/Images/service5.png",
  },
  {
    title: "Analytics and Tracing",
    titleBg: "bg-gray dark:bg-gray-dark",
    bg: "bg-black dark:bg-black-dark",
    learn: "text-white dark:text-gray-300",
    arrow: "bg-black text-gray dark:bg-black-dark dark:text-gray-300",
    img: "/Images/service6.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section className="container py-10 md:py-16 px-5 lg:px-0 dark:text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading
          title="Services"
          content="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {services.map((service, index) => (
          <motion.article
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`border p-5 md:p-12 rounded-4xl flex items-center justify-between lg:gap-4 shadow-[0_10px_0_0_rgba(0,0,0,1)] overflow-hidden ${service.bg}`}
          >
            {/* Left side content */}
            <div className="w-full md:w-55">
              <h3
                className={`px-2 !font-bold rounded-sm inline leading-10 ${service.titleBg} dark:text-black`}
              >
                {service.title}
              </h3>

              {/* Learn More */}
              <Link
                href="#"
                className="pt-6 dark:text-black flex gap-4 items-center group"
                aria-label={`Learn more about ${service.title}`}
              >
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <BsArrowUpRightCircleFill
                    size={35}
                    className={`rounded-full transition-colors duration-300 ${service.arrow}`}
                  />
                </motion.div>
                <p
                  className={`hidden md:block text-lg transition-colors duration-300 ${service.learn}`}
                >
                  Learn More
                </p>
              </Link>
            </div>

            {/* Right side image */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </motion.div>
          </motion.article>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center rounded-4xl w-full relative bg-gray p-10 dark:bg-gray-dark dark:text-black"
      >
        <div>
          <h2 className="text-2xl font-bold">Let's Make Things Happen</h2>
          <p className="py-6 md:w-[500px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:hover:text-black hover:bg-white border-2 border-transparent hover:text-black hover:border-2 hover:border-black text-white dark:text-white rounded-2xl px-10 py-5 text-xl"
          >
            Get Your Free Proposal
          </motion.button>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/Images/Frame1.png"
            alt="Contact us illustration"
            width={400}
            height={400}
            className="hidden lg:block absolute -top-20 right-10 object-contain w-full md:w-130"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
