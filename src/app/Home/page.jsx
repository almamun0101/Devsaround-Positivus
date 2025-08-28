import React from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import Services from "../Component/Services";
import Studies from "../Component/Studies";
import Process from "../Component/Process";
import Team from "../Component/Team";
import Testimonials from "../Component/Testimonials";
import Contact from "../Component/Contact";


const page = () => {
  return (
    <div className="px-2 ">
      <Navbar />
      <Header/>
      <Services/>
      <Studies/>
      <Process/>
      <Team/>
      <Testimonials/>
      <Contact/>

    </div>
  );
};

export default page;
