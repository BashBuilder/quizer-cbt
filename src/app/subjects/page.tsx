"use client";
/* eslint-disable */

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chatbot } from "@/components/chatbot";
import { NotificationSystem } from "@/components/notification-system";
import {
  BookOpen,
  Search,
  Clock,
  Target,
  TrendingUp,
  Star,
  Play,
  ChevronRight,
  Calculator,
  Atom,
  Globe,
  Microscope,
  PenTool,
  Users,
  Heart,
  Zap,
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  totalQuestions: number;
  topics: Topic[];
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  examTypes: {
    waec: number;
    jamb: number;
  };
  color: string;
  bgColor: string;
}

interface Topic {
  id: string;
  name: string;
  questions: number;
  difficulty: "Easy" | "Medium" | "Hard";
  lastUpdated: string;
}

const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: <Calculator className="h-6 w-6" />,
    description: "Master algebra, geometry, calculus, and statistics",
    totalQuestions: 2847,
    topics: [
      {
        id: "algebra",
        name: "Algebra",
        questions: 456,
        difficulty: "Medium",
        lastUpdated: "2024-01-15",
      },
      {
        id: "geometry",
        name: "Geometry",
        questions: 389,
        difficulty: "Hard",
        lastUpdated: "2024-01-14",
      },
      {
        id: "calculus",
        name: "Calculus",
        questions: 234,
        difficulty: "Hard",
        lastUpdated: "2024-01-13",
      },
      {
        id: "statistics",
        name: "Statistics",
        questions: 298,
        difficulty: "Medium",
        lastUpdated: "2024-01-12",
      },
      {
        id: "trigonometry",
        name: "Trigonometry",
        questions: 267,
        difficulty: "Medium",
        lastUpdated: "2024-01-11",
      },
      {
        id: "number-theory",
        name: "Number Theory",
        questions: 189,
        difficulty: "Easy",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 892, medium: 1234, hard: 721 },
    examTypes: { waec: 1456, jamb: 1391 },
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    id: "physics",
    name: "Physics",
    icon: <Atom className="h-6 w-6" />,
    description: "Explore mechanics, thermodynamics, and quantum physics",
    totalQuestions: 2234,
    topics: [
      {
        id: "mechanics",
        name: "Mechanics",
        questions: 445,
        difficulty: "Medium",
        lastUpdated: "2024-01-15",
      },
      {
        id: "thermodynamics",
        name: "Thermodynamics",
        questions: 298,
        difficulty: "Hard",
        lastUpdated: "2024-01-14",
      },
      {
        id: "electricity",
        name: "Electricity & Magnetism",
        questions: 367,
        difficulty: "Hard",
        lastUpdated: "2024-01-13",
      },
      {
        id: "optics",
        name: "Optics",
        questions: 234,
        difficulty: "Medium",
        lastUpdated: "2024-01-12",
      },
      {
        id: "waves",
        name: "Waves & Sound",
        questions: 289,
        difficulty: "Medium",
        lastUpdated: "2024-01-11",
      },
      {
        id: "modern-physics",
        name: "Modern Physics",
        questions: 156,
        difficulty: "Hard",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 567, medium: 1089, hard: 578 },
    examTypes: { waec: 1123, jamb: 1111 },
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-200",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: <Microscope className="h-6 w-6" />,
    description: "Study organic, inorganic, and physical chemistry",
    totalQuestions: 2156,
    topics: [
      {
        id: "organic",
        name: "Organic Chemistry",
        questions: 456,
        difficulty: "Hard",
        lastUpdated: "2024-01-15",
      },
      {
        id: "inorganic",
        name: "Inorganic Chemistry",
        questions: 389,
        difficulty: "Medium",
        lastUpdated: "2024-01-14",
      },
      {
        id: "physical",
        name: "Physical Chemistry",
        questions: 334,
        difficulty: "Hard",
        lastUpdated: "2024-01-13",
      },
      {
        id: "analytical",
        name: "Analytical Chemistry",
        questions: 267,
        difficulty: "Medium",
        lastUpdated: "2024-01-12",
      },
      {
        id: "biochemistry",
        name: "Biochemistry",
        questions: 198,
        difficulty: "Hard",
        lastUpdated: "2024-01-11",
      },
      {
        id: "environmental",
        name: "Environmental Chemistry",
        questions: 145,
        difficulty: "Easy",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 456, medium: 1034, hard: 666 },
    examTypes: { waec: 1089, jamb: 1067 },
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "biology",
    name: "Biology",
    icon: <Heart className="h-6 w-6" />,
    description: "Discover life sciences, genetics, and ecology",
    totalQuestions: 1987,
    topics: [
      {
        id: "cell-biology",
        name: "Cell Biology",
        questions: 398,
        difficulty: "Medium",
        lastUpdated: "2024-01-15",
      },
      {
        id: "genetics",
        name: "Genetics",
        questions: 334,
        difficulty: "Hard",
        lastUpdated: "2024-01-14",
      },
      {
        id: "ecology",
        name: "Ecology",
        questions: 289,
        difficulty: "Medium",
        lastUpdated: "2024-01-13",
      },
      {
        id: "evolution",
        name: "Evolution",
        questions: 234,
        difficulty: "Medium",
        lastUpdated: "2024-01-12",
      },
      {
        id: "anatomy",
        name: "Human Anatomy",
        questions: 267,
        difficulty: "Hard",
        lastUpdated: "2024-01-11",
      },
      {
        id: "botany",
        name: "Plant Biology",
        questions: 198,
        difficulty: "Easy",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 567, medium: 889, hard: 531 },
    examTypes: { waec: 998, jamb: 989 },
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-200",
  },
  {
    id: "english",
    name: "English Language",
    icon: <PenTool className="h-6 w-6" />,
    description: "Master grammar, comprehension, and essay writing",
    totalQuestions: 1876,
    topics: [
      {
        id: "grammar",
        name: "Grammar",
        questions: 445,
        difficulty: "Medium",
        lastUpdated: "2024-01-15",
      },
      {
        id: "comprehension",
        name: "Reading Comprehension",
        questions: 389,
        difficulty: "Medium",
        lastUpdated: "2024-01-14",
      },
      {
        id: "essay",
        name: "Essay Writing",
        questions: 298,
        difficulty: "Hard",
        lastUpdated: "2024-01-13",
      },
      {
        id: "vocabulary",
        name: "Vocabulary",
        questions: 334,
        difficulty: "Easy",
        lastUpdated: "2024-01-12",
      },
      {
        id: "literature",
        name: "Literature",
        questions: 234,
        difficulty: "Hard",
        lastUpdated: "2024-01-11",
      },
      {
        id: "oral-english",
        name: "Oral English",
        questions: 176,
        difficulty: "Medium",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 623, medium: 789, hard: 464 },
    examTypes: { waec: 934, jamb: 942 },
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
  },
  {
    id: "geography",
    name: "Geography",
    icon: <Globe className="h-6 w-6" />,
    description: "Explore physical and human geography",
    totalQuestions: 1456,
    topics: [
      {
        id: "physical",
        name: "Physical Geography",
        questions: 334,
        difficulty: "Medium",
        lastUpdated: "2024-01-15",
      },
      {
        id: "human",
        name: "Human Geography",
        questions: 298,
        difficulty: "Medium",
        lastUpdated: "2024-01-14",
      },
      {
        id: "cartography",
        name: "Map Reading",
        questions: 234,
        difficulty: "Easy",
        lastUpdated: "2024-01-13",
      },
      {
        id: "climatology",
        name: "Climate & Weather",
        questions: 189,
        difficulty: "Medium",
        lastUpdated: "2024-01-12",
      },
      {
        id: "economic",
        name: "Economic Geography",
        questions: 167,
        difficulty: "Hard",
        lastUpdated: "2024-01-11",
      },
      {
        id: "regional",
        name: "Regional Studies",
        questions: 234,
        difficulty: "Medium",
        lastUpdated: "2024-01-10",
      },
    ],
    difficulty: { easy: 456, medium: 723, hard: 277 },
    examTypes: { waec: 734, jamb: 722 },
    color: "text-teal-600",
    bgColor: "bg-teal-50 border-teal-200",
  },
];

const examYears = ["2024", "2023", "2022", "2021", "2020", "2019", "2018"];

export default function SubjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExamType, setSelectedExamType] = useState<
    "all" | "waec" | "jamb"
  >("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "all" | "easy" | "medium" | "hard"
  >("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch =
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.topics.some((topic) =>
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesSearch;
  });

  const handleStartPractice = (subjectId: string, topicId?: string) => {
    console.log(
      `Starting practice for ${subjectId}${topicId ? ` - ${topicId}` : ""}`,
    );
    // Navigate to quiz with filters
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-balance text-4xl font-bold">
            WAEC & JAMB Question Bank
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
            Access thousands of authentic past questions organized by subjects,
            topics, and difficulty levels
          </p>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  placeholder="Search subjects, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Tabs
                  value={selectedExamType}
                  onValueChange={(value) => setSelectedExamType(value as any)}
                >
                  <TabsList>
                    <TabsTrigger value="all">All Exams</TabsTrigger>
                    <TabsTrigger value="waec">WAEC</TabsTrigger>
                    <TabsTrigger value="jamb">JAMB</TabsTrigger>
                  </TabsList>
                </Tabs>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as any)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="all">All Years</option>
                  {examYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subject Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSubjects.map((subject) => (
            <Card
              key={subject.id}
              className={`group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${subject.bgColor}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${subject.color} bg-white/80`}
                  >
                    {subject.icon}
                  </div>
                  <Badge variant="secondary" className="bg-white/80">
                    {subject.totalQuestions.toLocaleString()} questions
                  </Badge>
                </div>
                <CardTitle className="text-xl">{subject.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/60 p-3">
                    <div className="mb-1 flex items-center space-x-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium">WAEC</span>
                    </div>
                    <p className="text-lg font-bold">
                      {subject.examTypes.waec}
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/60 p-3">
                    <div className="mb-1 flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-xs font-medium">JAMB</span>
                    </div>
                    <p className="text-lg font-bold">
                      {subject.examTypes.jamb}
                    </p>
                  </div>
                </div>

                {/* Difficulty Distribution */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Difficulty Distribution</span>
                    <span>{subject.totalQuestions} total</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-full bg-white/60">
                    <div
                      className="bg-green-500"
                      style={{
                        width: `${(subject.difficulty.easy / subject.totalQuestions) * 100}%`,
                      }}
                    />
                    <div
                      className="bg-yellow-500"
                      style={{
                        width: `${(subject.difficulty.medium / subject.totalQuestions) * 100}%`,
                      }}
                    />
                    <div
                      className="bg-red-500"
                      style={{
                        width: `${(subject.difficulty.hard / subject.totalQuestions) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-600">
                      {subject.difficulty.easy} Easy
                    </span>
                    <span className="text-yellow-600">
                      {subject.difficulty.medium} Medium
                    </span>
                    <span className="text-red-600">
                      {subject.difficulty.hard} Hard
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    className="flex-1"
                    onClick={() => handleStartPractice(subject.id)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Start Practice
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/80">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Subject View */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Featured Subject: Mathematics
                </CardTitle>
                <CardDescription>
                  Explore topics and start practicing with our most
                  comprehensive question bank
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects[0].topics.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Calculator className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{topic.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {topic.questions} questions • Updated{" "}
                            {topic.lastUpdated}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant={
                            topic.difficulty === "Easy"
                              ? "default"
                              : topic.difficulty === "Medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {topic.difficulty}
                        </Badge>
                        <Button
                          size="sm"
                          onClick={() =>
                            handleStartPractice("mathematics", topic.id)
                          }
                        >
                          Practice
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Question Bank Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-primary">
                    {subjects
                      .reduce((acc, subject) => acc + subject.totalQuestions, 0)
                      .toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Total Questions
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-green-600">
                      {subjects
                        .reduce(
                          (acc, subject) => acc + subject.examTypes.waec,
                          0,
                        )
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      WAEC Questions
                    </p>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">
                      {subjects
                        .reduce(
                          (acc, subject) => acc + subject.examTypes.jamb,
                          0,
                        )
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      JAMB Questions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Recent Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">
                      Mathematics - 45 new questions added
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">
                      Physics - Updated 2024 JAMB questions
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-sm">
                      Chemistry - New organic chemistry section
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="text-sm">
                      English - Grammar exercises updated
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Random Practice
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Timed Mock Exam
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Study Groups
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Saved Questions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Add chatbot and notification system */}
      <Chatbot />
      <NotificationSystem />
    </div>
  );
}
