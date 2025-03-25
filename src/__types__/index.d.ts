export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface QuestionType {
  id: number;
  question: string;
  option: Option;
  section: string;
  image: string;
  answer: string;
  solution: string;
  examtype: string;
  examyear: string;
  questionNub: number;
  hasPassage: number;
  category: string;
}

interface QuestionApiResponseType {
  subject: string;
  data: QuestionType[];
}

interface SelectedOptionType {
  subject: string;
  option: {
    num: number;
    option: string;
  }[];
}

interface LoginResponse {
  _id: string;
  username: string;
  email: string;
  token: string;
  subscribeCount: {
    practice: number;
    jamb: number;
  };
}

interface ScoreModel {
  email: string;
  score: { subject: string; score: number }[];
}
