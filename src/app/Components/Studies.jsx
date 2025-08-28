import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const studies = [
  {
    text: "For a local restaurant we implemented a targeted PC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales .",
  },
  {
    text: "For a B2B software company , we developed an SEO strategy that resulted in a first page ranking for key keywords and 200% increase in organic traffic",
  },
  {
    text: "For a national retail chain , we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales. ",
  },
];
const Studies = () => {
  return (
    <div className="container lg:py-30">
      {/* Heading */}
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start items-center py-10 text-center lg:text-left">
        <h2 className="bg-pri text-center lg:text-left- rounded-lg p-3  text-3xl font-medium">
          Case Studies
        </h2>
        <p className="w-full lg:w-[580px]">
          Explore REal-life Examples of Our Proven Digital Marketing Success
          Through OUr Case Studies
        </p>
      </div>

      <div className="md:grid hidden  md:grid-cols-3 justify-between items-center rounded-4xl w-full relative bg-black text-white text-left lg:p-15 ">
        {studies.map((study, index) => (
          <div
            className={`flex justify-between flex-col gap-10 w-70 mx-auto p-5 text-lg ${
              index !== studies.length - 1 ? "border-r" : "border-0"
            }`}
            key={index}
          >
            <p>{study.text}</p>
            <Link href="" className="flex  items-center gap-5 text-pri text-lg">
              Learn More <MdArrowOutward />
            </Link>
          </div>
        ))}
      </div>

      <div className="p-10 grid grid-cols-1 gap-10  ">
        {studies.map((study, index) => (
          <div className="bg-black text-white p-15 rounded-xl flex flex-col gap-10">
            <p>{study.text}</p>
            <Link href="" className="flex  items-center gap-5 text-pri text-lg">
              Learn More <MdArrowOutward />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studies;
