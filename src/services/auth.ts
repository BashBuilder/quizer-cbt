import { LoginResponse } from "@/__types__";
import axios from "@/config/axios";
import { userStore } from "@/data/constants";
import { removeCookie, setCookie } from "@/lib/auth";

export const registerUser = async (data: {
  email: string;
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post("/user/register", data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message || "Error login in");
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post<LoginResponse>("/user/login", data);
    setCookie(userStore.token, response.data.token);
    setCookie(userStore.username, response.data.username);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message || "Error login in");
  }
};

export const logout = async () => {
  removeCookie(userStore.token);
  removeCookie(userStore.username);
};
