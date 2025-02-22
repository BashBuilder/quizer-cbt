import { LoginResponse } from "@/__types__";
import axios from "@/config/axios";
import { localstore } from "@/data/constants";
import { setCookie, setToken } from "@/lib/auth";

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
    setToken(localstore.token, response.data.token);
    setCookie(localstore.username, response.data.username);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message || "Error login in");
  }
};
