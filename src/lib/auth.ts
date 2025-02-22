/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cookies } from "react-cookie";
import { decrypt, encrypt } from "./encryption";
// import jwt from "jsonwebtoken";
// import { toast } from "sonner";

import { localstore } from "@/data/constants";

const cookie = new Cookies();

export const setToken = (key: string, token: string) => {
  const currentDate = new Date();
  const expirationDate = new Date(currentDate);
  expirationDate.setMinutes(currentDate.getHours() + 10);
  cookie.set(key, encrypt(JSON.stringify(token)), {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    expires: expirationDate,
    path: "/",
  });
};

export const getToken = (key: string) => {
  const cookieData = cookie.get(key);
  return decrypt(cookieData) ?? null;
};

export const removeToken = (key: string) => {
  cookie.remove(key);
};

// // export const removeTokens = () => {
// //   removeToken("entityUserToken");
// //   removeToken("token");
// //   removeToken("entityId");
// //   removeToken("hasWallet");
// //   removeToken("isTeamMember");
// // };

export const setCookie = (key: string, value: string) => {
  cookie.set(key, value, {
    httpOnly: false,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
};

export const getCookie = (key: string) => {
  return cookie.get(key);
};

export const removeCookie = (key: string) => {
  cookie.remove(key);
};

// export const isTokenExpired = (key: string): boolean => {
//   const token = cookie.get(key);
//   if (!token) return true;

//   const decryptedToken = decrypt(token);
//   const decoded = jwt.decode(decryptedToken);
//   // @ts-expect-error "some error"
//   const { payload } = decoded;
//   const { exp } = payload;

//   if (!exp) return true;

//   return Date.now() >= exp * 1000;
// };

// let refreshInterval: ReturnType<typeof setInterval>;

// export const startTokenRefreshTimer = () => {
//   refreshInterval = setInterval(
//     async () => {
//       try {
//         // await refreshLogin();
//       } catch (error) {
//         toast.error((error as Error).message || "Token refresh failed");
//         clearInterval(refreshInterval);
//       }
//     },
//     25 * 60 * 1000,
//   );
// };

// export const stopTokenRefreshTimer = () => {
//   clearInterval(refreshInterval);
// };

export const saveItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null; // Return null if running on the server
};

export const removeItem = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const removeItems = () => {
  if (typeof window !== "undefined") {
    Object.values(localstore).forEach((item) => removeItem(item));
  }
};
