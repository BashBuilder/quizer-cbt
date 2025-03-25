import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/config/axios";
import { QuestionType, ScoreModel, SelectedOptionType } from "@/__types__";
import { AxiosError } from "axios";

export const useGetScores = () => {
  return useQuery({
    queryKey: ["scores"],
    queryFn: async () => {
      try {
        const response = await axios.get<ScoreModel[]>("/question/scores");
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw error.response?.data.message || "Something went wrong";
        } else {
          throw "Something went wrong";
        }
      }
    },
  });
};

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
        if (error instanceof AxiosError) {
          throw error.response?.data.message || "Something went wrong";
        } else {
          throw "Something went wrong";
        }
      }
    },
  });
};

export const useGetGroupOfQuestions = () => {
  return useMutation({
    mutationFn: async (data: {
      subjects: string[];
      number: number;
      jamb?: boolean;
    }) => {
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
        if (error instanceof AxiosError) {
          throw error.response?.data.message || "Something went wrong";
        } else {
          throw "Something went wrong";
        }
      }
    },
  });
};

export const useSubmitQuestions = () => {
  return useMutation({
    mutationFn: async (data: {
      options: SelectedOptionType[];
      quiz: {
        subject: string;
        data: QuestionType[];
      }[];
      jamb: boolean;
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
