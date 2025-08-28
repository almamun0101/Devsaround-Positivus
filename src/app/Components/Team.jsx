import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teams = [
    {
        name: "John Smith ",
        position : "CEO and Founder",
        link:"",
        description : "10+ years of experience in digital marketing . Expertise in SEO , PPC , and content strategy",
        img:"",
    },
    {
        name: "Jane Doe",
        position : "Director o Operations",
        link:"",
        description : "7+ years of experience in project management and team leadership.Strong organization and communication skills",
        img:"",
    },
    {
        name: "Michael Brown",
        position : "Senior SEO Specialist",
        link:"",
        description : "%+ years of experience in SEO and content creation .Proficient in keyword research and on-page optimization",
        img:"",
    },
    {
        name: "Emily Johnson",
        position : "PPC MAnger",
        link:"",
        description : "3+ years of experience in paid search advertising .Skilled in campaign management and performance analysis ",
        img:"",
    },
    {
        name: "Brian Williams",
        position : "Social Media Specialist",
        link:"",
        description : "4+ years of experience in social media marketing .Proficient in creating and scheduling content,analyzing metrics and building engagement",
        img:"",
    },
    {
        name: "Sarah Kim",
        position : "Content Creator",
        link:"",
        description : "2+ years of experience in writing and editing Skilled in creating compelling , SEO optimized content for various industries",
        img:"",
    },
]
const Team = () => {
  return (
    <div className="container py-20">
      {/* Heading */}
      <div className="flex flex-wrap gap-12 justify-center lg:justify-start items-center py-10 text-center lg:text-left">
        <h2 className="bg-pri text-center lg:text-left- rounded-lg p-3  text-3xl font-medium">
          Team
        </h2>
        <p className="w-full lg:w-[473px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
    {
        teams.map((member)=>(

        <div className="border p-10 rounded-3xl">
          <div className="flex gap-10 border-b pb-10 justify-between">
            <div className=""></div>
            <div className="pt-10">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
            </div>
            <div className="w-15 h-15 flex justify-center items-center bg-black rounded-full p-2">
              <FaLinkedinIn size={30} className="text-pri" />
            </div>
          </div>

          <p className="py-10">
{member.description}
          </p>
        </div>
        ))
    }
      </div>
    </div>
  );
};

export default Team;
