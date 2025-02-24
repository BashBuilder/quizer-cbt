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
      if (token && username) {
        const tokenValue = token.split("=")[1];
        const usernameValue = username.split("=")[1];
        await dispatch(login({ token: tokenValue, username: usernameValue }));
      }
    };
    fetchToken();
  }, [dispatch]);

  const { token, username } = useSelector((state: RootState) => state.auth);

  return { token, username };
};

export default useAuth;
