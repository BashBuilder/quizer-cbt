import React from "react";
import Why from "./Why";
import HowItWorks from "./HowItWorks";
import AboutComponent from "./AboutComponent";

const page = () => {
  return (
    <main className="container px-8 py-12">
      <Why />
      <HowItWorks />
      <AboutComponent />
    </main>
  );
};

export default page;
