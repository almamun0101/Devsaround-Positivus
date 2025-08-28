import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Heading from "./Heading";

const teams = [
  {
    name: "John Smith ",
    position: "CEO and Founder",
    link: "",
    description:
      "10+ years of experience in digital marketing . Expertise in SEO , PPC , and content strategy",
    img: "",
  },
  {
    name: "Jane Doe",
    position: "Director o Operations",
    link: "",
    description:
      "7+ years of experience in project management and team leadership.Strong organization and communication skills",
    img: "",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    link: "",
    description:
      "%+ years of experience in SEO and content creation .Proficient in keyword research and on-page optimization",
    img: "",
  },
  {
    name: "Emily Johnson",
    position: "PPC MAnger",
    link: "",
    description:
      "3+ years of experience in paid search advertising .Skilled in campaign management and performance analysis ",
    img: "",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    link: "",
    description:
      "4+ years of experience in social media marketing .Proficient in creating and scheduling content,analyzing metrics and building engagement",
    img: "",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    link: "",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling , SEO optimized content for various industries",
    img: "",
  },
];
const Team = () => {
  return (
    <div className="container py-20">
      {/* Heading */}
    <Heading title={"Team"} content={"Meet the skilled and experienced team behind our successful digital marketing strategies"}/>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teams.map((member) => (
          <div className="border p-5 lg:p-5 rounded-3xl shadow-[0_5px_0_0_rgba(0,0,0,1)]">
            <div className="flex  border-b pb-10 justify-between">
              <div className=""></div>
              <div className="pt-10">
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
              </div>
              <div className="w-12 h-12 flex justify-center items-center bg-black rounded-full p-2">
                <FaLinkedinIn size={20} className="text-pri" />
              </div>
            </div>

            <p className="py-10">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end py-15">
      <button className="bg-black text-xl text-white w-66 h-16 rounded-xl">
            See All Team{" "}
          </button>
      </div>
    </div>
  );
};

export default Team;
