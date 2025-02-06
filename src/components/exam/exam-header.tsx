"use client";
import React, { useEffect, useMemo, useState } from "react";
import Logo from "../global/logo";
import CounterDownTimer from "./countdown-timer";
import { Button } from "../ui/button";
import { getItem, removeItem } from "@/lib/auth";
import { localstore } from "@/data/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ExamHeader = () => {
  const [warningCount, setWarningCount] = useState(0);
  const router = useRouter();

  const isExamStarted = useMemo(() => getItem(localstore.examStarted), []);
  const time = useMemo(() => getItem(localstore.time) || 0, []);

  /** Handle warning messages in sequence */
  useEffect(() => {
    if (warningCount === 1) {
      toast.error(
        "Warning: Do not minimize your browser! Your exam may be invalidated.",
      );
    } else if (warningCount === 2) {
      toast.error(
        "Warning: This is the last warning. Your exam will be invalidated.",
      );
    } else if (warningCount === 3) {
      toast.error("Your exam will be invalidated.");
      handleExamFinish();
    }
  }, [warningCount]);

  /** Function to trigger warnings safely */
  const handleWarnings = () => {
    setWarningCount((prev) => Math.min(prev + 1, 3)); // Prevents going above 3
  };

  /** Ensures exam submission happens only once */
  const handleExamFinish = () => {
    removeItem(localstore.time);
    removeItem(localstore.examStarted);
    toast.warning("Submitting...");

    setTimeout(() => {
      window.location.href = "/quiz/result"; // Ensure redirect happens only once
    }, 1000);
  };

  /** Prevents multiple warnings firing too fast */
  let warningTimeout: NodeJS.Timeout;
  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearTimeout(warningTimeout);
      warningTimeout = setTimeout(() => {
        handleWarnings();
      }, 500);
    }
  };

  /** Prevents refresh & developer tools */
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
      event.preventDefault();
      toast.error("Refreshing is disabled during the exam!");
    }

    if (
      (event.ctrlKey && event.shiftKey && event.key === "I") ||
      (event.ctrlKey && event.shiftKey && event.key === "J") ||
      (event.ctrlKey && event.key === "U") ||
      (event.ctrlKey && event.shiftKey && event.key === "C")
    ) {
      toast.error("Developer tools are disabled during the exam!");
      event.preventDefault();
    }
  };

  /** Disable right-click */
  const handleContextMenu = (event: MouseEvent) => event.preventDefault();

  /** Prevent back navigation */
  const handleBackButton = () => {
    toast.error("You cannot go back during the exam!");
    router.push("/exam");
  };

  /** Enable full-screen mode */
  const enableFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  /** Attach event listeners */
  useEffect(() => {
    window.addEventListener("beforeunload", handleWarnings);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    enableFullScreen();

    return () => {
      window.removeEventListener("beforeunload", handleWarnings);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  if (!isExamStarted) {
    return (
      <header className="container bg-primary px-8 py-4">
        <div className="pointer-events-none text-white">
          <Logo />
        </div>
      </header>
    );
  }

  return (
    <header className="container relative flex items-center justify-between gap-8 bg-primary px-8 py-4">
      <div className="pointer-events-none text-white">
        <Logo />
      </div>
      <CounterDownTimer
        onFinish={handleExamFinish}
        duration={time}
        startCountdown={true}
      />
      <Button variant="outline" size="sm">
        Submit
      </Button>
    </header>
  );
};

export default ExamHeader;
