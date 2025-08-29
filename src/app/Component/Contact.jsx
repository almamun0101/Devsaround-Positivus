"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Image from "next/image";

const Contact = () => {
  const [contactMethod, setContactMethod] = useState("");

  return (
    <div className="container mx-auto py-10 px-4">
      {/* SEO-friendly Heading */}
      <Heading
        title="Contact Us"
        content="Connect with us: Let's Discuss Your Digital Marketing Needs"
      />

      <section
        className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-4xl flex flex-col lg:flex-row items-start justify-between relative overflow-hidden px-6 sm:px-10"
        aria-labelledby="contact-section"
      >
        {/* Left: Contact Form */}
        <div className="py-8 lg:py-16 sm:px-6 lg:px-12 w-full lg:w-2/4 mx-auto">
          {/* Radio Buttons */}
          <fieldset className="mb-8">
            <legend className="sr-only">Preferred Contact Method</legend>
            <div className="flex sm:flex-row gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Say Hi"
                  checked={contactMethod === "Say Hi"}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="accent-pri"
                />
                <span>Say Hi</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Red"
                  checked={contactMethod === "Red"}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="accent-pri"
                />
                <span>Red</span>
              </label>
            </div>
          </fieldset>

          {/* Form */}
          <form
            action="#"
            method="POST"
            className="space-y-6"
            aria-label="Contact Form"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm p-4 bg-gray-50 dark:bg-gray-800 border border-black dark:border-gray-700 text-sm rounded-lg w-full focus:ring-pri focus:border-pri"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block p-3 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 rounded-lg border border-black dark:border-gray-700 shadow-sm focus:ring-pri focus:border-pri"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-black dark:text-white rounded-lg shadow-sm border border-black dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-pri focus:border-pri"
                placeholder="Leave a comment..."
              />
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-black dark:bg-pri hover:bg-gray-800 dark:hover:bg-pri/80 focus:ring-4 focus:outline-none focus:ring-pri"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Decorative Image */}
        <div
          className="hidden lg:flex w-2/4 justify-end items-end relative"
          aria-hidden="true"
        >
          <Image
            src="/Images/conatctbanner.png"
            width={500}
            height={300}
            className="object-cover absolute top-20 -right-70"
            alt="Digital marketing consultation illustration"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
