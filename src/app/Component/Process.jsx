"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "./Heading";
import { motion, AnimatePresence } from "framer-motion";

const processes = [
  {
    id: "01",
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "03",
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "04",
    title: "Monitoring And Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const Process = () => {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container py-10">
      {/* Heading */}
      <Heading
        title={"Our Working Process"}
        content={"Step-by-Step Guide to Achieving Your Business Goals"}
      />

      {/* Processes */}
      <div className="flex flex-col justify-start gap-5 lg:gap-10 py-10">
        {processes.map((process) => (
          <motion.div
            key={process.id}
            layout
            initial={{ borderRadius: 20 }}
            className={`${
              openId === process.id ? "bg-pri" : "bg-gray"
            } w-full px-10 py-5 lg:py-10 border rounded-4xl mx-auto shadow-[0_6px_0_0_rgba(0,0,0,1)] cursor-pointer`}
          >
            <div
              onClick={() => handleOpen(process.id)}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-6 py-5">
                <h2 className="font-bold text-4xl">{process.id}</h2>
                <h3 className="!text-lg font-medium">{process.title}</h3>
              </div>
              {openId === process.id ? (
                <Minus className="w-10 h-10 rounded-full border-2 p-2" />
              ) : (
                <Plus className="w-10 h-10 rounded-full border-2 p-2" />
              )}
            </div>

            {/* Animated content */}
            <AnimatePresence>
              {openId === process.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-2 border-t pt-5">{process.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
