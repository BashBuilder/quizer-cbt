"use client";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const useAuth = () => {
  const { token, username } = useSelector((state: RootState) => state.auth);
  return { token, username };
};

export default useAuth;
