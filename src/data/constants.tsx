import { Brain, Target, TrendingUp, Users } from "lucide-react";

export const localstore = {
  testOptions: "quizer-test",
  questions: "quizer-question",
  time: "quizer-time",
  examStarted: "quizer-exam-started",
  result: "quizer-result",
  isJamb: "quizer-is-jamb",
};

export const userStore = {
  token: "quizer-token",
  username: "quizer-username",
  subscribeCount: "quizer-subscribe-count",
};

export const subjects = [
  {
    name: "Mathematics",
    icon: "📊",
    questions: "2,500+",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "English",
    icon: "📚",
    questions: "1,800+",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Physics",
    icon: "⚡",
    questions: "2,200+",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Chemistry",
    icon: "🧪",
    questions: "2,000+",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Biology",
    icon: "🧬",
    questions: "1,900+",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Geography",
    icon: "🌍",
    questions: "1,500+",
    color: "bg-orange-100 text-orange-700",
  },
];

export const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Learning",
    description:
      "Get personalized question recommendations and instant explanations powered by advanced AI.",
    color: "text-blue-600",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Authentic Questions",
    description:
      "Practice with real WAEC and JAMB questions from previous years, updated regularly.",
    color: "text-green-600",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Progress Tracking",
    description:
      "Monitor your improvement with detailed analytics and performance insights.",
    color: "text-purple-600",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Learning",
    description:
      "Join thousands of students and compete in leaderboards and challenges.",
    color: "text-orange-600",
  },
];

export const testimonials = [
  {
    name: "Adebayo Olamide",
    score: "289/400",
    exam: "JAMB 2024",
    quote:
      "QuizerGo helped me identify my weak areas and improve systematically. The AI explanations were incredibly helpful!",
    avatar: "/nigerian-student-male.jpg",
  },
  {
    name: "Chioma Nwankwo",
    score: "A1 in 8 subjects",
    exam: "WAEC 2024",
    quote:
      "The practice questions were exactly like the real exam. I felt so prepared and confident on exam day.",
    avatar: "/nigerian-student-female.jpg",
  },
  {
    name: "Ibrahim Musa",
    score: "315/400",
    exam: "JAMB 2024",
    quote:
      "The 3D learning experience made studying fun. I never thought I could enjoy preparing for exams!",
    avatar: "/nigerian-student-male-glasses.jpg",
  },
];
