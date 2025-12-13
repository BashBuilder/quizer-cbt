/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BookOpen,
  TrendingUp,
  Target,
  Award,
  Clock,
  Brain,
  Zap,
  Star,
  Calendar,
  Trophy,
  Users,
  ArrowRight,
  Play,
  BarChart3,
  PieChartIcon,
  Activity,
  CheckCircle,
  AlertCircle,
  File as Fire,
} from "lucide-react";
import { Chatbot } from "@/components/chatbot";
import { NotificationSystem } from "@/components/notification-system";

const performanceData = [
  { subject: "Math", score: 85, questions: 120, time: 45 },
  { subject: "Physics", score: 78, questions: 95, time: 38 },
  { subject: "Chemistry", score: 92, questions: 110, time: 42 },
  { subject: "English", score: 88, questions: 85, time: 35 },
  { subject: "Biology", score: 76, questions: 100, time: 40 },
  { subject: "Geography", score: 82, questions: 75, time: 30 },
];

const weeklyProgress = [
  { day: "Mon", questions: 25, correct: 20, time: 45 },
  { day: "Tue", questions: 30, correct: 24, time: 52 },
  { day: "Wed", questions: 22, correct: 18, time: 38 },
  { day: "Thu", questions: 35, correct: 31, time: 58 },
  { day: "Fri", questions: 28, correct: 25, time: 48 },
  { day: "Sat", questions: 40, correct: 36, time: 65 },
  { day: "Sun", questions: 32, correct: 28, time: 55 },
];

const examTypeData = [
  { name: "JAMB", value: 65, color: "#22c55e" },
  { name: "WAEC", value: 35, color: "#84cc16" },
];

const difficultyData = [
  { difficulty: "Easy", completed: 85, total: 100 },
  { difficulty: "Medium", completed: 65, total: 100 },
  { difficulty: "Hard", completed: 40, total: 100 },
];

const recentQuizzes = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Algebra",
    score: 85,
    total: 100,
    date: "2024-01-15",
    duration: "25 min",
    difficulty: "Medium",
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Mechanics",
    score: 92,
    total: 100,
    date: "2024-01-14",
    duration: "30 min",
    difficulty: "Hard",
  },
  {
    id: 3,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    score: 78,
    total: 100,
    date: "2024-01-13",
    duration: "28 min",
    difficulty: "Medium",
  },
  {
    id: 4,
    subject: "English",
    topic: "Grammar",
    score: 88,
    total: 100,
    date: "2024-01-12",
    duration: "22 min",
    difficulty: "Easy",
  },
];

const achievements = [
  {
    title: "First Quiz Completed",
    description: "Complete your first quiz",
    earned: true,
    date: "2024-01-10",
  },
  {
    title: "Week Warrior",
    description: "Practice 7 days in a row",
    earned: true,
    date: "2024-01-14",
  },
  {
    title: "Perfect Score",
    description: "Get 100% on any quiz",
    earned: true,
    date: "2024-01-12",
  },
  {
    title: "Speed Demon",
    description: "Complete a quiz in under 15 minutes",
    earned: false,
    date: null,
  },
  {
    title: "Subject Master",
    description: "Score 90%+ in all subjects",
    earned: false,
    date: null,
  },
  {
    title: "Marathon Runner",
    description: "Practice for 30 days straight",
    earned: false,
    date: null,
  },
];

export default function DashboardPage() {
  const [currentStreak, setCurrentStreak] = useState(12);
  const [totalQuestions, setTotalQuestions] = useState(847);
  const [averageScore, setAverageScore] = useState(84);
  const [studyTime, setStudyTime] = useState(156); // hours

  const overallProgress = Math.round((totalQuestions / 1000) * 100);
  const earnedAchievements = achievements.filter((a) => a.earned).length;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold">
              Welcome back, Student!
            </h1>
            <p className="text-pretty text-muted-foreground">
              Track your progress and continue your journey to exam success
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Quick Practice
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Study
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Current Streak
                  </p>
                  <p className="text-3xl font-bold text-orange-600">
                    {currentStreak}
                  </p>
                  <p className="text-xs text-muted-foreground">days</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Fire className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-16 w-16 rounded-full bg-orange-500/10" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Questions Solved
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {totalQuestions.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600">+47 this week</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-16 w-16 rounded-full bg-primary/10" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <p className="text-3xl font-bold text-green-600">
                    {averageScore}%
                  </p>
                  <p className="text-xs text-green-600">+3% this month</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-16 w-16 rounded-full bg-green-500/10" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {studyTime}h
                  </p>
                  <p className="text-xs text-muted-foreground">total hours</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 -mb-8 -mr-8 h-16 w-16 rounded-full bg-blue-500/10" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* Analytics Tabs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Performance Analytics
                </CardTitle>
                <CardDescription>
                  Detailed insights into your learning progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="subjects" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="subjects">By Subject</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly Progress</TabsTrigger>
                    <TabsTrigger value="difficulty">Difficulty</TabsTrigger>
                  </TabsList>

                  <TabsContent value="subjects" className="space-y-4">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="subject" />
                          <YAxis />
                          <Tooltip />
                          <Bar
                            dataKey="score"
                            fill="hsl(var(--primary))"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>

                  <TabsContent value="weekly" className="space-y-4">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={weeklyProgress}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="questions"
                            stroke="hsl(var(--primary))"
                            strokeWidth={3}
                            dot={{
                              fill: "hsl(var(--primary))",
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="correct"
                            stroke="hsl(var(--accent))"
                            strokeWidth={3}
                            dot={{
                              fill: "hsl(var(--accent))",
                              strokeWidth: 2,
                              r: 4,
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>

                  <TabsContent value="difficulty" className="space-y-4">
                    <div className="space-y-4">
                      {difficultyData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">
                              {item.difficulty}
                            </span>
                            <span className="text-muted-foreground">
                              {item.completed}/{item.total}
                            </span>
                          </div>
                          <Progress
                            value={(item.completed / item.total) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Recent Quizzes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Recent Quiz Results
                </CardTitle>
                <CardDescription>Your latest quiz performances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{quiz.subject}</h4>
                          <p className="text-sm text-muted-foreground">
                            {quiz.topic}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{quiz.score}%</p>
                          <p className="text-xs text-muted-foreground">
                            {quiz.duration}
                          </p>
                        </div>
                        <Badge
                          variant={
                            quiz.difficulty === "Easy"
                              ? "default"
                              : quiz.difficulty === "Medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {quiz.difficulty}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    {overallProgress}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exam Readiness
                  </p>
                </div>
                <Progress value={overallProgress} className="h-3" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    {totalQuestions} of 1,000 questions completed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Exam Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChartIcon className="mr-2 h-5 w-5" />
                  Exam Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={examTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {examTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  {examTypeData.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  {earnedAchievements} of {achievements.length} unlocked
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          achievement.earned
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {achievement.earned ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {achievement.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="mt-4 w-full bg-transparent"
                >
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Brain className="mr-2 h-4 w-4" />
                  AI Practice Recommendation
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Join Leaderboard
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
                  <Star className="mr-2 h-4 w-4" />
                  Review Mistakes
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
