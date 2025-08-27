import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Services from "../Components/Services";

const page = () => {
  return (
    <div className="px-2 lg:px-0">
      <Navbar />
      <Header/>
      <Services/>
    </div>
  );
};

export default page;
