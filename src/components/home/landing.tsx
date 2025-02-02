import { Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Landing = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="space-y-8">
        <article className="space-y-4 text-center">
          <h1 className="motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-preset-confetti motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur mx-auto flex w-fit items-center gap-4 rounded-md bg-white px-4 py-2 text-2xl font-semibold text-zinc-700">
            <span className="rounded-md bg-primary p-2">
              <Zap fill="white" className="text-white" />
            </span>
            <span className="text-primary">Unlock</span> Your Creative Potential
          </h1>
          <div>
            <h2 className="text-2xl text-zinc-600">
              with Online Design and Development Courses.
            </h2>
            <p className="text-zinc-500">
              Learn, Practice and Enhance Your Skills.
            </p>
          </div>
        </article>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="sm"> Explore Subjects </Button>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
