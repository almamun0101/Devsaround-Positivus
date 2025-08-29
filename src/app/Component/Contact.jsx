"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState("");

  return (
    <div className="container mx-auto py-10">
      <Heading
        title={"Contact Us"}
        content={"Connect with us: Let's Discuss Your Digital Marketing Needs"}
      />

      <section className="bg-gray-100 text-black rounded-4xl flex flex-col lg:flex-row items-start justify-between relative overflow-hidden px-10">
        {/* Left: Form */}
        <div className="py-8 lg:py-16  sm:px-12 lg:px-20 w-full lg:w-2/4 mx-auto">
          {/* Radio Buttons */}
          <div className="flex  sm:flex-row gap-6 mb-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value="Say Hi"
                checked={contactMethod === "Say Hi"}
                onChange={(e) => setContactMethod(e.target.value)}
                className="accent-pri"
              />
              Say Hi
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="contactMethod"
                value="Red"
                checked={contactMethod === "Red"}
                onChange={(e) => setContactMethod(e.target.value)}
                className="accent-pri"
              />
              Red
            </label>
          </div>

          {/* Form */}
          <form action="#" className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm p-4 bg-gray-50 border border-black text-sm rounded-lg w-full focus:ring-black focus:border-black"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-black focus:border-black"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-bold">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-black focus:ring-black focus:border-black"
                placeholder="Leave a comment..."
              />
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image at bottom */}
        <div className="hidden  lg:flex w-2/4 justify-end items-end relative">
          <Image
            src="/Images/conatctbanner.png"
            width={500}
            height={100}
            className="object-cover absolute top-20 -right-70 "
            alt="Contact Banner "
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
