"use client";
import { QuestionApiResponseType } from "@/__types__";
import ExamHeader from "@/components/exam/exam-header";
import Loading from "@/components/global/loading";
import { Button } from "@/components/ui/button";
import React, { useMemo, useState } from "react";
import ExamModal from "./exam-modal";

const Exam = () => {
  const [loading, setLoading] = useState(true);

  const questions: QuestionApiResponseType | undefined = useMemo(() => {
    if (typeof window !== "undefined") {
      const storedQuestion = localStorage.getItem("quizer-test");
      if (!storedQuestion) return;

      setLoading(false);
      return JSON.parse(storedQuestion);
    }
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
        {questions && (
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
