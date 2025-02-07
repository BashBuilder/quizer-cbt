import { useMutation } from "@tanstack/react-query";
import axios from "@/config/axios";
import {
  QuestionApiResponseType,
  QuestionType,
  SelectedOptionType,
} from "@/__types__";

export const useGetRandomQuestions = () => {
  return useMutation({
    mutationFn: async (data: { subject: string; number: number }) => {
      try {
        const response = await axios.post<{
          subject: string;
          status: number;
          data: QuestionType[];
        }>("/question/random", data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useGetGroupOfQuestions = () => {
  return useMutation({
    mutationFn: async (data: { subjects: string[]; number: number }) => {
      try {
        const response = await axios.post<
          {
            subject: string;
            status: number;
            data: QuestionType[];
          }[]
        >("/question/multiple", data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useSubmitQuestions = () => {
  return useMutation({
    mutationFn: async (data: {
      questions: QuestionApiResponseType[];
      options: SelectedOptionType[];
    }) => {
      try {
        const response = await axios.post("/question/submit", data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};
