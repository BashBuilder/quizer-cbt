"use client";
import { Calculator } from "lucide-react";
import ExamCalculator from "./ExamCalculator";
import { useCallback, useEffect, useMemo, useState } from "react";
import { saveItem } from "@/lib/auth";
import { localstore } from "@/data/constants";

interface CountDownProps {
  onFinish: () => void;
  duration: number;
  startCountdown: boolean;
}

export default function CountDownTimer({
  onFinish,
  duration,
  startCountdown,
}: CountDownProps) {
  const [examTime, setExamTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isCalculatorShown, setIsCalculatorShown] = useState(false);

  const startTimer = useCallback(() => {
    // eslint-disable-next-line
    let countdown: NodeJS.Timeout;
    const endTime = new Date().getTime() + duration * 1000;

    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const timeRemaining = endTime - currentTime;

      if (timeRemaining <= 0) {
        onFinish();
        clearInterval(countdown);
      } else {
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        saveItem(localstore.time, timeRemaining / 1000);

        setExamTime((prevTime) => {
          if (
            prevTime.hours !== hours ||
            prevTime.minutes !== minutes ||
            prevTime.seconds !== seconds
          ) {
            return { hours, minutes, seconds };
          }
          return prevTime;
        });
      }
    };

    countdown = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [duration, onFinish]);

  useEffect(() => {
    if (startCountdown) {
      startTimer();
    }
  }, [startCountdown, startTimer]);

  const examTimeDisplay = useMemo(() => {
    return (
      <>
        <div className="flex size-8 items-center justify-center rounded-md bg-violet-50 font-medium text-primary">
          <h6>{examTime.hours}</h6>
        </div>
        <div className="flex size-8 items-center justify-center rounded-md bg-violet-50 font-medium text-primary">
          <h6>{examTime.minutes}</h6>
        </div>
        <div className="flex size-8 items-center justify-center rounded-md bg-violet-50 font-medium text-primary">
          <h6>{examTime.seconds}</h6>
        </div>
      </>
    );
  }, [examTime]);

  return (
    <article className="flex items-center justify-end gap-1 md:right-[12%]">
      <ExamCalculator isCalculatorShown={isCalculatorShown} />

      <button
        className="mr-5 rounded-md bg-white p-1.5 shadow"
        onClick={() => setIsCalculatorShown((shownState) => !shownState)}
      >
        <Calculator />
      </button>
      {examTimeDisplay}
    </article>
  );
}
