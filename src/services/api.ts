import { LoginResponse, QuestionType } from "@/__types__";
import { userStore } from "@/data/constants";
import { getCookie } from "@/lib/auth";
import axios from "axios";

export const getRandomQuestionsBySubject = async (
  subject: string,
  number: number,
) => {
  try {
    const url =
      process.env.NEXT_PUBLIC_ALOC_BASE_URL + `q/${number}?subject=${subject}`;

    const response = await axios.get<{
      subject: string;
      status: number;
      data: QuestionType[];
    }>(url, {
      headers: {
        "Content-Type": "application/json",
        AccessToken: process.env.NEXT_PUBLIC_ALOC_TOKEN,
        Accept: "application/json",
      },
    });

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

export const getOrderedQuestionsBySubject = async (
  subject: string,
  number: number,
) => {
  try {
    const randomYear = Math.floor(Math.random() * 8 + 2003);
    const url =
      process.env.NEXT_PUBLIC_ALOC_BASE_URL +
      `m/${number}?subject=${subject}&year=${randomYear}&random=false`;

    const response = await axios.get<{
      subject: string;
      status: number;
      data: QuestionType[];
    }>(url, {
      headers: {
        "Content-Type": "application/json",
        AccessToken: process.env.NEXT_PUBLIC_ALOC_TOKEN,
        Accept: "application/json",
      },
    });

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
export const getEnglishQuestionFromDb = async () => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_BASE_URL + "question/english",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie(userStore.token)}`,
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch english questions");
  }
};

export const getLiteratureQuestionFromDb = async (number: number) => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        `question/literature?number=${number}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie(userStore.token)}`,
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch english questions");
  }
};

export const getQuestions = async (data: {
  subjects: string[];
  jamb?: boolean;
  number: number;
}) => {
  try {
    const { subjects, jamb, number } = data;
    const questions: {
      subject: string;
      status: number;
      data: QuestionType[];
    }[] = [];

    for (const subject of subjects) {
      if (subject === "english") {
        // const { data } = await axios.post<{
        //   subject: string;
        //   status: number;
        //   data: QuestionType[];
        // }>(
        //   process.env.NEXT_PUBLIC_API_BASE_URL + "question/random",
        //   {
        //     subject: "english",
        //     number,
        //     jamb,
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${getCookie(userStore.token)}`,
        //     },
        //   },
        // );
        const part1 = await getEnglishQuestionFromDb();
        const part2 = await getOrderedQuestionsBySubject("english", 20);
        const q = {
          subject: "english",
          status: 200,
          data: [...part1.data, ...part2.data],
        };
        questions.push(q);
      } else if (subject === "englishlit") {
        const lit = await getLiteratureQuestionFromDb(number);
        questions.push(lit);
      } else {
        await getRandomQuestionsBySubject(subject, number).then((data) =>
          questions.push(data),
        );
      }
    }
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_BASE_URL + "user/me",
      {
        updateCount: true,
        jamb,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie(userStore.token)}`,
        },
      },
    );
    return { data: questions, updatedUser: response.data.subscribeCount };
  } catch (error) {
    if (error) {
      throw error;
    }
    throw new Error(`Failed to fetch questions. ${(error as Error).message}`);
  }
};
