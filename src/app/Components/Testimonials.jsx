"use client";

import { useState, useEffect } from "react";
import React from "react";
import Heading from "./Heading";

const comments = [
  { id: "c1", text: "This service is amazing! It helped me grow my business fast." },
  { id: "c2", text: "Excellent support and great features. Highly recommend!" },
  { id: "c3", text: "I love the clean design and smooth experience." },
  { id: "c4", text: "Super easy to use and very reliable." },
];



const Testimonials = () => {
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % comments.length), 4000);
    return () => clearInterval(t);
  }, [comments.length]);

  return (
    <div className="container py-10">
      <Heading
        title={"Testimonials"}
        content={
          "Hear from OUr Satisfied Clients : Read Our Testimonials to earn more about our Digital Marketing Services"
        }
      />

    <div className="flex flex-col items-center justify-center p-6 bg-black text-white py-50">
      <div className="border border-pri p-5 w-1/2 text-center text-lg md:text-xl font-medium italic">
        “{comments[index].text}”
      </div>

      <div className="flex gap-2 mt-4">
        {comments.map((c, i) => (
          <button
            key={c.id} // unique key — no more warning
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>

    </div>
  );
};

export default Testimonials;
