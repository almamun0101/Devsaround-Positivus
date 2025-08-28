import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Studies from "../Components/Studies";

const page = () => {
  return (
    <div className="px-2 ">
      <Navbar />
      <Header/>
      <Services/>
      <Studies/>
    </div>
  );
};

export default page;
