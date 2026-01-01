"use client";

import About from "@/components/home/about";
import Landing from "@/components/home/landing";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Landing />
      <About />
    </main>
  );
}
