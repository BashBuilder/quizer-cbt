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

  const isExamStarted = useMemo(() => {
    return getItem(localstore.examStarted);
  }, []);

  const time = useMemo(() => {
    const examDuration = getItem(localstore.time);
    if (examDuration) {
      return examDuration;
    }
  }, []);

  const handleWarnings = () => {
    setWarningCount((prev) => prev + 1);
    if (warningCount === 1) {
      toast.error(
        "Warning: Do not minimize your browser! Your exam may be invalidated.",
      );
    } else if (warningCount === 2) {
      toast.error(
        "Warning: This is the last warning. Your exam will be invalidated",
      );
    } else if (warningCount > 2) {
      toast.error("Your exam will be invalidated.");
      onExamFinish();
    }
  };

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "";
    handleWarnings();
  };

  const handleBlur = () => {
    toast.error(
      "Warning: You minimized the window! This may lead to exam disqualification.",
    );
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      handleWarnings();
    }
  };

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

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  const handleBackButton = () => {
    toast.error("You cannot go back during the exam!");
    router.push("/exam");
  };

  const enableFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    enableFullScreen();

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("popstate", handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [warningCount]);

  const onExamFinish = () => {
    removeItem(localstore.time);
    removeItem(localstore.examStarted);
    toast.warning("Submitting...");
    window.location.href = "/quiz/result";
  };

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
        onFinish={onExamFinish}
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
