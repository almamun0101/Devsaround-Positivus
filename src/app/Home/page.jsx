import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Studies from "../Components/Studies";
import Process from "../Components/Process";
import Team from "../Components/Team";

const page = () => {
  return (
    <div className="px-2 ">
      <Navbar />
      <Header/>
      <Services/>
      <Studies/>
      <Process/>
      <Team/>

    </div>
  );
};

export default page;
