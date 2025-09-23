"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Chatbot } from "@/components/chatbot"
import { NotificationSystem } from "@/components/notification-system"
import {
  Brain,
  Clock,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Star,
  TrendingUp,
  Award,
  RefreshCw,
} from "lucide-react"

interface Question {
  id: number
  subject: string
  topic: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "Easy" | "Medium" | "Hard"
  examType: "WAEC" | "JAMB"
  year: string
  aiHint: string
  aiConfidence: number
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    subject: "Mathematics",
    topic: "Algebra",
    question: "If 2x + 5 = 13, what is the value of x?",
    options: ["x = 3", "x = 4", "x = 5", "x = 6"],
    correctAnswer: 1,
    explanation: "To solve 2x + 5 = 13, subtract 5 from both sides: 2x = 8, then divide by 2: x = 4",
    difficulty: "Easy",
    examType: "JAMB",
    year: "2023",
    aiHint: "Remember to isolate the variable by performing inverse operations on both sides of the equation.",
    aiConfidence: 98,
  },
  {
    id: 2,
    subject: "Physics",
    topic: "Motion",
    question: "A car travels 120km in 2 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correctAnswer: 1,
    explanation: "Average speed = Total distance ÷ Total time = 120km ÷ 2h = 60 km/h",
    difficulty: "Easy",
    examType: "WAEC",
    year: "2024",
    aiHint: "Use the formula: Speed = Distance ÷ Time. Make sure your units are consistent.",
    aiConfidence: 95,
  },
  {
    id: 3,
    subject: "Chemistry",
    topic: "Atomic Structure",
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Carbon has 6 protons in its nucleus, which defines its atomic number as 6.",
    difficulty: "Easy",
    examType: "JAMB",
    year: "2023",
    aiHint: "The atomic number equals the number of protons in an atom's nucleus.",
    aiConfidence: 99,
  },
  {
    id: 4,
    subject: "English",
    topic: "Grammar",
    question: "Choose the correct sentence:",
    options: [
      "Neither John nor Mary are coming",
      "Neither John nor Mary is coming",
      "Neither John or Mary are coming",
      "Neither John or Mary is coming",
    ],
    correctAnswer: 1,
    explanation:
      "With 'neither...nor', the verb agrees with the subject closer to it. Since 'Mary' is singular, we use 'is'.",
    difficulty: "Medium",
    examType: "WAEC",
    year: "2024",
    aiHint: "Pay attention to subject-verb agreement rules with correlative conjunctions.",
    aiConfidence: 92,
  },
  {
    id: 5,
    subject: "Biology",
    topic: "Cell Biology",
    question: "Which organelle is responsible for protein synthesis?",
    options: ["Mitochondria", "Ribosome", "Nucleus", "Golgi apparatus"],
    correctAnswer: 1,
    explanation: "Ribosomes are the cellular organelles responsible for protein synthesis through translation of mRNA.",
    difficulty: "Medium",
    examType: "JAMB",
    year: "2023",
    aiHint: "Think about where proteins are actually assembled in the cell.",
    aiConfidence: 96,
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(sampleQuestions.length).fill(null))
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const question = sampleQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100

  // Timer effect
  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      handleQuizComplete()
    }
  }, [quizStarted, quizCompleted, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Update streak
      if (selectedAnswer === question.correctAnswer) {
        setStreak((prev) => prev + 1)
        setMaxStreak((prev) => Math.max(prev, streak + 1))
      } else {
        setStreak(0)
      }
    }

    setShowExplanation(false)
    setShowHint(false)
    setSelectedAnswer(answers[currentQuestion + 1] || null)

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleQuizComplete()
    }
  }

  const handlePrevious = () => {
    setShowExplanation(false)
    setShowHint(false)
    setCurrentQuestion(currentQuestion - 1)
    setSelectedAnswer(answers[currentQuestion - 1])
  }

  const handleQuizComplete = useCallback(() => {
    setQuizCompleted(true)
    const correctAnswers = answers.reduce((acc, answer, index) => {
      return answer === sampleQuestions[index].correctAnswer ? acc + 1 : acc
    }, 0)
    setScore(correctAnswers)
  }, [answers])

  const startQuiz = () => {
    setQuizStarted(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setShowHint(false)
    setAnswers(new Array(sampleQuestions.length).fill(null))
    setTimeLeft(1800)
    setQuizStarted(false)
    setQuizCompleted(false)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl">AI-Powered Quiz</CardTitle>
            <CardDescription className="text-lg">
              Test your knowledge with intelligent feedback and personalized explanations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="font-medium">Questions</span>
                </div>
                <p className="text-2xl font-bold">{sampleQuestions.length}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Time Limit</span>
                </div>
                <p className="text-2xl font-bold">30 min</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold flex items-center">
                <Zap className="h-5 w-5 text-accent mr-2" />
                AI Features
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Intelligent hints and explanations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time confidence scoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Personalized performance analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Adaptive difficulty adjustment
                </li>
              </ul>
            </div>

            <Button onClick={startQuiz} size="lg" className="w-full text-lg py-6">
              <Brain className="mr-2 h-5 w-5" />
              Start AI Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    const percentage = Math.round((score / sampleQuestions.length) * 100)
    const grade =
      percentage >= 80 ? "Excellent" : percentage >= 60 ? "Good" : percentage >= 40 ? "Fair" : "Needs Improvement"

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            <CardDescription className="text-lg">Here's how you performed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
              <div className="text-xl text-muted-foreground mb-4">{grade}</div>
              <Badge variant={percentage >= 60 ? "default" : "destructive"} className="text-sm px-4 py-2">
                {score} out of {sampleQuestions.length} correct
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{maxStreak}</div>
                <div className="text-sm text-muted-foreground">Best Streak</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{formatTime(1800 - timeLeft)}</div>
                <div className="text-sm text-muted-foreground">Time Taken</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round(percentage / 20)}/5</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold flex items-center">
                <Brain className="h-5 w-5 text-accent mr-2" />
                AI Performance Analysis
              </h3>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Mathematics</span>
                  <span className="text-green-600 font-medium">Strong</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Physics</span>
                  <span className="text-green-600 font-medium">Strong</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Chemistry</span>
                  <span className="text-yellow-600 font-medium">Average</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>English</span>
                  <span className="text-red-600 font-medium">Needs Work</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={restartQuiz} variant="outline" className="flex-1 bg-transparent">
                <RefreshCw className="mr-2 h-4 w-4" />
                Retake Quiz
              </Button>
              <Button className="flex-1">
                <BookOpen className="mr-2 h-4 w-4" />
                Review Answers
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Quiz</h1>
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {sampleQuestions.length}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
            </div>
            {streak > 0 && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                🔥 {streak} streak
              </Badge>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Question Card */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{question.subject}</Badge>
                    <Badge variant="secondary">
                      {question.examType} {question.year}
                    </Badge>
                    <Badge
                      variant={
                        question.difficulty === "Easy"
                          ? "default"
                          : question.difficulty === "Medium"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {question.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Brain className="h-4 w-4" />
                    <span>AI Confidence: {question.aiConfidence}%</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === index ? "default" : "outline"}
                      className="justify-start text-left h-auto p-4 whitespace-normal"
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">{String.fromCharCode(65 + index)}</span>
                        </div>
                        <span>{option}</span>
                      </div>
                    </Button>
                  ))}
                </div>

                {showExplanation && (
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">AI Explanation</span>
                    </div>
                    <p className="text-sm leading-relaxed">{question.explanation}</p>
                  </div>
                )}

                {showHint && (
                  <div className="bg-accent/10 rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      <span className="font-medium">AI Hint</span>
                    </div>
                    <p className="text-sm leading-relaxed">{question.aiHint}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowHint(!showHint)}
                      disabled={selectedAnswer !== null}
                    >
                      <Lightbulb className="mr-2 h-4 w-4" />
                      {showHint ? "Hide Hint" : "Get Hint"}
                    </Button>
                    {selectedAnswer !== null && (
                      <Button variant="outline" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
                        <Brain className="mr-2 h-4 w-4" />
                        {showExplanation ? "Hide Explanation" : "Show Explanation"}
                      </Button>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button onClick={handleNext} disabled={selectedAnswer === null}>
                      {currentQuestion === sampleQuestions.length - 1 ? "Finish" : "Next"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Question Navigator */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Question Navigator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {sampleQuestions.map((_, index) => (
                    <Button
                      key={index}
                      variant={
                        index === currentQuestion ? "default" : answers[index] !== null ? "secondary" : "outline"
                      }
                      size="sm"
                      className="aspect-square p-0"
                      onClick={() => {
                        setCurrentQuestion(index)
                        setSelectedAnswer(answers[index])
                        setShowExplanation(false)
                        setShowHint(false)
                      }}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Answered</span>
                  <span className="font-medium">
                    {answers.filter((a) => a !== null).length}/{sampleQuestions.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Current Streak</span>
                  <span className="font-medium">{streak}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Best Streak</span>
                  <span className="font-medium">{maxStreak}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="text-sm font-medium">Subject Breakdown</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Mathematics</span>
                      <span>1/1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Physics</span>
                      <span>1/1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chemistry</span>
                      <span>1/1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>English</span>
                      <span>1/1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Biology</span>
                      <span>1/1</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Add chatbot and notification system */}
      <Chatbot />
      <NotificationSystem />
    </div>
  )
}
