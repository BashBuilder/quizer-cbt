/* eslint-disable @next/next/no-img-element */

import { QuestionType } from "@/__types__";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface SelectedOptionType {
  num: number;
  option: string;
}

const ExamModal = ({ questions }: { questions: QuestionType[] }) => {
  const [currentQuestion, setCurrentQurestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<SelectedOptionType[]>(
    [],
  );

  const handleNextQuestion = (num: number) =>
    setCurrentQurestion((prev) => prev + num);

  const handleRandomQuestion = (num: number) => setCurrentQurestion(num);

  const updateAnswers = (num: number, option: string) => {
    setSelectedOption((prev) => {
      const updatedOptions = prev.filter((opt) => opt.num !== num);
      return [...updatedOptions, { num, option }];
    });
  };

  console.log(selectedOption);

  return (
    <section className="mx-auto flex max-w-screen-lg flex-col gap-4">
      <div className="mb-4 flex flex-col gap-4 rounded-xl bg-background p-4 shadow-xl md:mb-10 md:px-20 md:py-10">
        {questions.map((question, qIndex) => {
          return (
            <article
              key={qIndex}
              className={` ${qIndex === currentQuestion ? "flex flex-col gap-4" : "hidden"} `}
            >
              {question.section &&
                !questions[currentQuestion].section
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
                    return (
                      <button
                        key={index}
                        className={cn(
                          "rounded-md bg-primary/5 px-4 py-2 text-left transition-colors duration-300 hover:bg-primary/10",
                          {
                            "bg-primary text-white": selectedOption.some(
                              (option) =>
                                option.num === qIndex + 1 &&
                                option.option === opt,
                            ),
                          },
                        )}
                        onClick={() => updateAnswers(qIndex + 1, opt)}
                      >
                        <span dangerouslySetInnerHTML={{ __html: opt }} />
                        <span className="pr-4">.</span>
                        <span
                          dangerouslySetInnerHTML={{
                            // @ts-expect-error "option type is not supported"
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
            disabled={currentQuestion + 1 === questions.length}
            variant="secondary"
          >
            Next
          </Button>
        </div>
      </div>
      {/* the lower question navigation pane  */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] justify-center gap-4 rounded-xl bg-background px-4 py-4 shadow-xl md:p-10 md:px-8">
        {questions.map((_, index) => {
          return (
            <Button
              key={index}
              className={cn("bg-primary/10 text-primary hover:bg-primary/20", {
                "bg-primary text-white hover:bg-primary/90":
                  index === currentQuestion ||
                  !!selectedOption[index + 1].option,
              })}
              size="icon"
              onClick={() => handleRandomQuestion(index)}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default ExamModal;
