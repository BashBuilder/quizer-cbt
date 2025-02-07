/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <img
        src="/assets/svg/question.svg"
        alt="quizer"
        className="motion-preset-rebound w-8/12 max-w-xs"
      />
      <h1 className="text-xl font-medium">You Seem Lost</h1>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default page;
