/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginResponse } from "@/__types__";
import { userStore } from "@/data/constants";
import { login, logout } from "@/hooks/features/authSlice";
import { removeCookie, setCookie } from "@/lib/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      LoginResponse,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setCookie(userStore.token, data.token);
          setCookie(userStore.username, data.username);
          setCookie(
            userStore.subscribeCount,
            JSON.stringify(data.subscribeCount),
          );
          dispatch(
            login({
              token: data.token,
              username: data.username,
              subscribeCount: data.subscribeCount,
            }),
          );
        } catch (err: any) {
          throw new Error(err.data.message || "Something went wrong");
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          removeCookie(userStore.token);
          removeCookie(userStore.username);
          dispatch(logout());
        } catch (err) {
          console.error("Logout failed", err);
        }
      },
    }),
    registerUser: builder.mutation<
      { message: string; data: LoginResponse },
      {
        email: string;
        username: string;
        password: string;
      }
    >({
      query: (credentials) => ({
        url: "/user/register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
} = authApi;
