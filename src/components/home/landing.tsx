/* eslint-disable @next/next/no-img-element */
"use client";
import { Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";

const Landing = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <section className="container mx-auto grid gap-4 px-8 py-16 lg:grid-cols-4">
      <img
        src="/assets/svg/home.svg"
        alt="welcome"
        className="mx-auto max-h-60 max-w-lg object-contain max-lg:hidden"
      />
      <div className="space-y-8 lg:col-span-2">
        <article className="space-y-4 text-center">
          <h1 className="motion-preset-confetti mx-auto flex w-fit items-center gap-4 rounded-md bg-white px-4 py-2 text-2xl font-semibold text-zinc-700 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/blur motion-delay-[0.75s]/rotate">
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
          <Link href="/quiz">
            <Button size="sm"> Explore Subjects </Button>
          </Link>
          {token ? (
            <Link href="/jamb">
              <Button
                variant="outline"
                size="sm"
                className="bg-emerald-500 text-white"
              >
                Take Jamb
              </Button>
            </Link>
          ) : (
            <Link href="/auth">
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
      <img
        src="/assets/svg/home.svg"
        alt="welcome"
        className="mx-auto max-h-60 max-w-lg object-contain animate-in"
      />
    </section>
  );
};

export default Landing;
