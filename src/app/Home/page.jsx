import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Studies from "../Components/Studies";
import Process from "../Components/Process";

const page = () => {
  return (
    <div className="px-2 ">
      <Navbar />
      <Header/>
      <Services/>
      <Studies/>
      <Process/>

    </div>
  );
};

export default page;
