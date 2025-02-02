/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <section className="container mx-auto flex flex-col items-center justify-center gap-8 px-8 py-16">
        <h2 className="text-center text-2xl font-semibold text-zinc-700">
          Pass in flying colours
        </h2>
        <img
          src="/assets/image/write.jpg"
          alt="pass"
          className="aspect-video w-10/12 rounded-xl object-cover"
        />
      </section>
    </div>
  );
};

export default About;
