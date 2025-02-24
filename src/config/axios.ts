import { userStore } from "@/data/constants";
import { getCookie } from "@/lib/auth";
import axios from "axios";

const token = getCookie(userStore.token);

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axios;
