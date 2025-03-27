import { QuestionType } from "@/__types__";
import { userStore } from "@/data/constants";
// import { subjects } from "@/data/data";
import { getCookie } from "@/lib/auth";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ALOC_BASE_URL;

axios.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_ALOC_TOKEN;

  if (token) {
    config.headers.AccessToken = token;
  }
  config.headers.Accept = "application/json";

  return config;
});

export const getRandomQuestionsBySubject = async (
  subject: string,
  number: number,
) => {
  try {
    const url = `q/${number}?subject=${subject}`;

    const response = await axios.get<{
      subject: string;
      status: number;
      data: QuestionType[];
    }>(url);

    return response.data;
  } catch (error) {
    if (error) {
      throw error;
    }
    throw new Error(
      `Failed to fetch questions for subject: ${subject} ${
        (error as Error).message
      }`,
    );
  }
};
export const getJamb = async (data: { subjects: string[]; jamb?: boolean }) => {
  try {
    const { subjects, jamb } = data;
    const questions: {
      subject: string;
      status: number;
      data: QuestionType[];
    }[] = [];

    let updatedUser = {};

    for (const subject of subjects) {
      if (subject === "english") {
        const { data } = await axios.post<{
          subject: string;
          status: number;
          data: QuestionType[];
        }>(
          process.env.NEXT_PUBLIC_API_BASE_URL + "question/random",
          {
            subject: "english",
            number: 40,
            jamb,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getCookie(userStore.token)}`,
            },
          },
        );
        questions.push(data);
        // @ts-expect-error "type"
        updatedUser = data.updatedUser;
      } else {
        await getRandomQuestionsBySubject(subject, 40).then((data) =>
          questions.push(data),
        );
      }
    }

    console.log("updated user", updatedUser);

    return { data: questions, updatedUser };
  } catch (error) {
    if (error) {
      throw error;
    }
    throw new Error(`Failed to fetch questions. ${(error as Error).message}`);
  }
};
