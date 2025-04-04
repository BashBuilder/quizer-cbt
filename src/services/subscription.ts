import { userStore } from "@/data/constants";
import { getCookie } from "@/lib/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSubscrib = () => {
  return useMutation({
    mutationFn: async () => {
      try {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_API_BASE_URL + "user/subscribe",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie(userStore.token)}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export const useConfirmSub = () => {
  return useMutation({
    mutationFn: async () => {
      try {
        const response = await axios.post(
          process.env.NEXT_PUBLIC_API_BASE_URL + "user/confirm-subscription",
          { data: "some data" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie(userStore.token)}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};
