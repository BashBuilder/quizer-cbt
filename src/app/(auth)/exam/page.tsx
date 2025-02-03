/* eslint-disable @next/next/no-img-element */
"use client";
import { QuestionApiResponseType } from "@/__types__";
import ExamHeader from "@/components/exam/exam-header";
import Loading from "@/components/global/loading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useMemo, useState } from "react";

const Exam = () => {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQurestion] = useState(0);

  const questions: QuestionApiResponseType | undefined = useMemo(() => {
    const storedQuestion = localStorage.getItem("quizer-test");
    if (!storedQuestion) return;

    setLoading(false);
    return JSON.parse(storedQuestion);
  }, []);

  const handleNextQuestion = (num: number) =>
    setCurrentQurestion((prev) => prev + num);

  const handleRandomQuestion = (num: number) => setCurrentQurestion(num);

  if (loading) {
    <div className="flex h-[60vh] items-center justify-center">
      <Loading />
    </div>;
  }

  return (
    <main>
      <ExamHeader />

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
          {/* the top question section */}
          <div className="mb-4 flex flex-col gap-4 rounded-xl bg-background p-4 shadow-xl md:mb-10 md:px-20 md:py-10">
            {questions.data.map((question, qIndex) => {
              return (
                <article
                  key={qIndex}
                  className={` ${qIndex === currentQuestion ? "flex flex-col gap-4" : "hidden"} `}
                >
                  {question.section &&
                    !questions.data[currentQuestion].section
                      .toLowerCase()
                      .includes("solution") && (
                      <p
                        className="text-xl font-semibold first-letter:capitalize"
                        dangerouslySetInnerHTML={{
                          __html: question.section,
                        }}
                      />
                    )}

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      <p className="text-xl">{currentQuestion + 1}.</p>
                      {question.question && (
                        <p
                          className="text-xl"
                          dangerouslySetInnerHTML={{
                            __html: question.question,
                          }}
                        />
                      )}
                    </div>
                    {question.image && (
                      <img
                        src={`${question.image}`}
                        alt="question image"
                        className="max-w-80"
                      />
                    )}
                  </div>

                  {/* options */}
                  <div className="flex flex-col items-start gap-2">
                    {Object.keys(question.option)
                      .sort()
                      .map((opt: string, index) => {
                        // const isOptionSelected = currentOption === opt;
                        // const isOptionCorrect =
                        //   currentAnswer === currentOption && isOptionSelected;
                        // const isNonChosenCorrectAnswer = currentAnswer === opt;
                        return (
                          <button
                            key={index}
                            // className={`hover: rounded-md px-4 py-2 text-left ${isSubmitted ? (isOptionCorrect ? correctColor : isNonChosenCorrectAnswer ? wrongColor : isOptionSelected && selectedColor) : isOptionSelected ? selectedColor : "bg-slate-50 hover:bg-slate-200"}`}
                            // onClick={() =>
                            //   updateAnswers({
                            //     answer: opt,
                            //     num: qIndex + 1,
                            //     subject,
                            //   })
                            // }
                            // disabled={isSubmitted}
                          >
                            <span dangerouslySetInnerHTML={{ __html: opt }} />
                            <span className="pr-4">.</span>
                            <span
                              dangerouslySetInnerHTML={{
                                // @ts-expect-error "options has any type"
                                __html: question.option[opt],
                              }}
                            />
                          </button>
                        );
                      })}
                  </div>
                </article>
              );
            })}

            {/* the next and previous button goes here */}
            <div className="my-6 flex justify-between">
              <Button
                onClick={() => handleNextQuestion(-1)}
                disabled={currentQuestion === 0}
                variant="secondary"
              >
                Previous
              </Button>
              <Button
                onClick={() => handleNextQuestion(1)}
                disabled={currentQuestion + 1 === questions.data.length}
                variant="secondary"
              >
                Next
              </Button>
            </div>
          </div>
          {/* the lower question navigation pane  */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] justify-center gap-4 rounded-xl bg-background px-4 py-4 shadow-xl md:p-10 md:px-8">
            {questions.data.map((_, index) => {
              return (
                <Button
                  key={index}
                  className={cn(
                    "bg-primary/10 text-primary hover:bg-primary/20",
                    {
                      "bg-primary text-white hover:bg-primary/90":
                        index === currentQuestion,
                    },
                  )}
                  size="icon"
                  onClick={() => handleRandomQuestion(index)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default Exam;
