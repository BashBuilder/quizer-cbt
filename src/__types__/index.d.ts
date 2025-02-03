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
  status: number;
  data: QuestionType[];
}
