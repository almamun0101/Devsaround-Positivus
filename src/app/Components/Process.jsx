"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
const processes = [
  {
    id: "01",
    title: "Consultation",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
  {
    id: "03",
    title: "Implementation",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
  {
    id: "04",
    title: "Monitoring And Optimization",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "During the initial consultation , we will discuss your business goals abd objectives , target audience , and current marketing efforts . This will allow us to understand your needs and tailor our services to best fit your requirements.  ",
  },
];
const Process = () => {
  const [openId, setOpenId] = useState(false);
  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div className="container py-10">
      {/* Heading */}
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start items-center py-10 text-center lg:text-left">
        <h2 className="bg-pri text-center lg:text-left- rounded-lg p-3  text-3xl font-medium">
          Our Working Process
        </h2>
        <p className="w-full lg:w-[580px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Processes */}
      <div className=" flex flex-col justify-start  gap-10 py-10">
        {processes.map((process) => (
          <div
            key={process.id}
            className={` ${openId === process.id ? "bg-pri" : "bg-gray"} w-full px-10 py-10 border rounded-4xl mx-auto shadow-[0_10px_0_0_rgba(0,0,0,1)]`}
          >
            <div
              onClick={() => handleOpen(process.id)}
              className="flex justify-between cursor-pointer"
            >
              <div className="flex items-center gap-6 py-5">
                <h2 className="font-bold text-4xl ">
                  {}
                  {process.id}
                </h2>
                <h3 className="text-lg font-medium">{process.title}</h3>
              </div>
              {openId === process.id ? (
                <Minus className="w-10 h-10 rounded-full border-2 p-2" />
              ) : (
                <Plus className="w-10 h-10 rounded-full border-2 p-2" />
              )}
            </div>
            {/* content */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openId === process.id ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
             <p className="px-2 border-t pt-5">{process.text}</p>   
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
