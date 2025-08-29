"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Heading from "./Heading";
import { motion, AnimatePresence } from "framer-motion";

const processes = [
  {
    id: "01",
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives...",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "We will analyze your market, competitors, and audience to develop a data-driven strategy...",
  },
  {
    id: "03",
    title: "Implementation",
    text: "Our team executes the strategy across SEO, PPC, content, and other channels...",
  },
  {
    id: "04",
    title: "Monitoring And Optimization",
    text: "We continuously track performance and optimize campaigns for the best results...",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "You’ll receive regular reports and updates, ensuring transparency...",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "We adapt strategies to industry changes and keep improving performance...",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 },
  }),
};

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
        {processes.map((process, index) => (
          <motion.div
            key={process.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            layout
            whileHover={{ scale: 1.02 }}
            className={`${
              openId === process.id
                ? "bg-pri text-black dark:bg-pri"
                : "bg-gray dark:bg-neutral-900 dark:text-gray-200"
            } w-full px-10 py-5 lg:py-10 border rounded-4xl mx-auto shadow-[0_6px_0_0_rgba(0,0,0,1)] cursor-pointer transition-colors duration-300`}
          >
            {/* Header */}
            <div
              onClick={() => handleOpen(process.id)}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-6 py-5">
                <h2 className="font-bold text-4xl">{process.id}</h2>
                <h3 className="!text-lg font-medium">{process.title}</h3>
              </div>
              <motion.div
                animate={{ rotate: openId === process.id ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {openId === process.id ? (
                  <Minus className="w-10 h-10 rounded-full border-2 p-2 dark:border-gray-400" />
                ) : (
                  <Plus className="w-10 h-10 rounded-full border-2 p-2 dark:border-gray-400" />
                )}
              </motion.div>
            </div>

            {/* Content */}
            <AnimatePresence>
              {openId === process.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="overflow-hidden"
                >
                  <p className="px-2 border-t pt-5 dark:border-gray-700">
                    {process.text}
                  </p>
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
