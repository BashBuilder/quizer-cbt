import { useMutation } from "@tanstack/react-query";
import axios from "@/config/axios";
import { QuestionType } from "@/__types__";

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
