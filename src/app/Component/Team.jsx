"use client";

import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Heading from "./Heading";
import Image from "next/image";
import { motion } from "framer-motion";

const teams = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    link: "",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: "/Images/Picture (1).png",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    link: "",
    description:
      "7+ years of experience in project management and team leadership. Strong organization and communication skills",
    img: "/Images/Picture (2).png",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    link: "",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: "/Images/Picture (3).png",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    link: "",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: "/Images/Picture (4).png",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    link: "",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics and building engagement",
    img: "/Images/Picture (5).png",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    link: "",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO optimized content for various industries",
    img: "/Images/Picture (6).png",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
  }),
};

const Team = () => {
  return (
    <div className="container py-20">
      {/* Heading */}
      <Heading
        title={"Team"}
        content={
          "Meet the skilled and experienced team behind our successful digital marketing strategies"
        }
      />

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {teams.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer p-6 lg:p-8"
          >
            <div className="flex border-b border-gray-300 dark:border-gray-700 pb-6 justify-between items-center">
              <div>
                <Image
                  src={member.img}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-pri dark:border-pri"
                  alt={member.name}
                />
              </div>
              <div className="pt-2 text-left ml-4 flex-1">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <h4 className="text-sm text-gray-600 dark:text-gray-300">
                  {member.position}
                </h4>
              </div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 flex justify-center items-center bg-black dark:bg-white rounded-full p-2 ml-4"
              >
                <FaLinkedinIn
                  size={20}
                  className="text-pri dark:text-black"
                />
              </motion.div>
            </div>

            <p className="py-6 text-gray-700 dark:text-gray-200">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end py-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black dark:bg-white text-white dark:text-black text-xl w-64 h-16 rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          See All Team
        </motion.button>
      </div>
    </div>
  );
};

export default Team;
