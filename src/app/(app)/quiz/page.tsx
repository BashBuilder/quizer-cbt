"use client";
import React from "react";
import { SingleSubjectModal } from "./single-subject-modal";

const page = () => {
  return (
    <main className="flex items-center justify-center gap-6 py-20">
      <div className="min-size-36 flex items-center justify-center rounded-lg bg-primary/20 p-20 text-xl text-zinc-500 shadow hover:shadow-lg">
        Jamb Standard
      </div>
      <SingleSubjectModal />

      <div className="min-size-36 flex items-center justify-center rounded-lg bg-primary/20 p-20 text-xl text-zinc-500 shadow hover:shadow-lg">
        Custom
      </div>
    </main>
  );
};

export default page;
