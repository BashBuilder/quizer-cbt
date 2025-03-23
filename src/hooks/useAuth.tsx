"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { userStore } from "@/data/constants";
import { login } from "./features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith(userStore.token + "="));
      const username = document.cookie
        .split("; ")
        .find((row) => row.startsWith(userStore.username + "="));
      const subscribeCount = document.cookie
        .split("; ")
        .find((row) => row.startsWith(userStore.subscribeCount + "="));

      if (token && username && subscribeCount) {
        const tokenValue = token.split("=")[1];
        const usernameValue = username.split("=")[1];
        const subscribeCountValue = JSON.parse(
          decodeURIComponent(subscribeCount.split("=")[1]),
        );
        dispatch(
          login({
            token: tokenValue,
            username: usernameValue,
            subscribeCount: subscribeCountValue,
          }),
        );
      }
    };
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { token, username, subscribeCount } = useSelector(
    (state: RootState) => state.auth,
  );

  return { token, username, subscribeCount };
};

export default useAuth;
