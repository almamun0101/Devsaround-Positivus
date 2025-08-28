import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="container">
      <Heading
        title={"Contact US"}
        content={"Connect with Us : Let's Discuss Your Digital Marketing Needs"}
      />

      <section className="bg-gray text-black rounded-4xl ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="flex justify-start gap-5 py-5">
            <div className="flex items-center gap-5">
              <input type="radio" />
              <p>Say Hi</p>
            </div>
            <div className="flex items-center gap-5">
              <input type="radio" />
              <p>Say Hi</p>
            </div>
           
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium ">
                Name
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm p-4 bg-gray-50 border border-black  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full  "
                placeholder="Name"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black "
              >
                Email
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-black"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-black rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
