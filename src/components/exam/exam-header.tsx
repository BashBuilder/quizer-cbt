"use client";
import React from "react";
import Logo from "../global/logo";
import CounterDownTimer from "./countdown-timer";
import { Button } from "../ui/button";

const ExamHeader = () => {
  const onExamFinish = () => {
    console.log("Exam finished");
  };

  return (
    <header className="container relative flex items-center justify-between gap-8 bg-primary px-8 py-4">
      <div className="pointer-events-none text-white">
        <Logo />
      </div>
      <CounterDownTimer
        onFinish={onExamFinish}
        duration={3600}
        startCountdown={true}
      />
      <Button variant="outline" size="sm">
        Submit
      </Button>
    </header>
  );
};

export default ExamHeader;
