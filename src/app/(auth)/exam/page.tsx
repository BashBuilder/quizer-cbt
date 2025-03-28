"use client";
import { QuestionApiResponseType } from "@/__types__";
import ExamHeader from "@/components/exam/exam-header";
import React, { useEffect, useState } from "react";
import { getItem } from "@/lib/auth";
import { localstore } from "@/data/constants";
import ExamPage from "./exam-page";

const Exam = () => {
  // const [loading, setLoading] = useState(true);
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
    };
    fetchQuestions();
  }, []);

  if (!questions) {
    return <div></div>;
  }

  return (
    <main className="container mx-auto">
      <ExamHeader />
      <ExamPage />
    </main>
  );
};

export default Exam;
