"use client";
import { QuestionApiResponseType } from "@/__types__";
import ExamHeader from "@/components/exam/exam-header";
import Loading from "@/components/global/loading";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ExamModal from "./exam-modal";
import { getItem } from "@/lib/auth";
import { localstore } from "@/data/constants";
import { toast } from "sonner";

const Exam = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<
    QuestionApiResponseType | undefined
  >();

  useEffect(() => {
    const storedQuestion = getItem(localstore.questions);
    if (!storedQuestion) return;
    setQuestions(storedQuestion);
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      toast.warning(
        "Are you sure you want to leave? Your progress may be lost.",
      );
      event.returnValue =
        "Are you sure you want to leave? Your progress may be lost.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  //  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        //  setWarningCount((prev) => prev + 1);
        //  alert("Warning: Do not switch tabs! Your exam may be invalidated.");
        toast.error(
          "Warning: Do not switch tabs! Your exam may be invalidated.",
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (loading) {
    <div className="flex h-[60vh] items-center justify-center">
      <Loading />
    </div>;
  }

  return (
    <main className="container mx-auto">
      <ExamHeader />

      <div className="px-4 md:px-8">
        {!!questions && (
          <section className="mx-auto flex max-w-screen-lg flex-col gap-4 pt-12">
            {/* buutons */}
            <div>
              <Button
                className={`w-fit rounded-md font-semibold capitalize hover:bg-primary/90 hover:shadow`}
              >
                {questions.subject}
              </Button>
            </div>

            {/* Question */}
            <ExamModal questions={questions.data} />
          </section>
        )}
      </div>
    </main>
  );
};

export default Exam;
