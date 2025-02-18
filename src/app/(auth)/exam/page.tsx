"use client";
import { QuestionApiResponseType } from "@/__types__";
import ExamHeader from "@/components/exam/exam-header";
// import Loading from "@/components/global/loading";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ExamModal from "./exam-modal";
import { getItem } from "@/lib/auth";
import { localstore } from "@/data/constants";
import { cn } from "@/lib/utils";

const Exam = () => {
  // const [loading, setLoading] = useState(true);
  const [currentSubject, setCurrentSubject] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<
    undefined | QuestionApiResponseType[]
  >();

  useEffect(() => {
    const fetchQuestions = async () => {
      const storedQuestion = await getItem(localstore.questions);
      if (!storedQuestion) return;
      setQuestions(
        Array.isArray(storedQuestion) ? [...storedQuestion] : [storedQuestion],
      );
      setCurrentSubject(storedQuestion[0].subject);
      // setLoading(false);
    };

    fetchQuestions();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex h-[60vh] items-center justify-center">
  //       <Loading />
  //     </div>
  //   );
  // }

  if (!questions) {
    return <div>no Questions</div>;
  }

  const handleSelectSubject = (subject: string) => {
    setCurrentSubject(subject);

    const index = questions.findIndex(
      (question) => question.subject === subject,
    );

    if (index !== -1) {
      setCurrentQuestion(index);
    }
  };

  return (
    <main className="container mx-auto">
      <ExamHeader />

      <div className="px-4 pt-10 md:px-8">
        <section className="mx-auto flex max-w-screen-lg flex-col gap-4 pt-12">
          {/* buutons */}
          <div className="flex gap-2">
            {questions.map((question) => (
              <Button
                key={question.subject}
                variant={
                  currentSubject === question.subject ? "default" : "outline"
                }
                className={cn(
                  `w-fit rounded-md font-semibold capitalize hover:bg-primary/90 hover:shadow`,
                )}
                onClick={() => handleSelectSubject(question.subject)}
              >
                {question.subject}
              </Button>
            ))}
          </div>

          {/* Question */}
          <ExamModal data={questions[currentQuestion]} />
        </section>
      </div>
    </main>
  );
};

export default Exam;
