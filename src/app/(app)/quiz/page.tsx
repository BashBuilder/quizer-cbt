/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { CustomSubjectModal } from "./custom-subject-modal";
import { SingleSubjectModal } from "./single-subject-modal copy";

const page = () => {
  return (
    <main className="container grid items-center gap-6 px-8 lg:grid-cols-2">
      <div>
        <img src="/assets/pen.png" alt="pen" className="duration-[500000s]" />
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-medium text-zinc-700">
          Practice Questions for JAMB, WAEC
        </h2>
        <div className="flex flex-wrap gap-4">
          <SingleSubjectModal />
          <CustomSubjectModal />
        </div>
      </div>
    </main>
  );
};

export default page;
