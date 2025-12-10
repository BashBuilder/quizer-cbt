"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  // BookOpen,
  Brain,
  Trophy,
  Users,
  Zap,
  Star,
  Play,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const subjects = [
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

  const features = [
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

  const testimonials = [
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Zap className="mr-2 h-4 w-4" />
                  AI-Powered Learning Platform
                </Badge>
                <h1 className="text-balance text-4xl font-bold leading-tight lg:text-6xl">
                  Master <span className="text-primary">WAEC</span> &{" "}
                  <span className="text-emerald-500">JAMB</span> with Confidence
                </h1>
                <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
                  Transform your exam preparation with our intelligent quiz
                  platform. Practice with authentic questions, get AI-powered
                  insights, and join thousands of successful students.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Start Free Practice
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent px-8 py-6 text-lg"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  View Success Stories
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Active Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">
                    Questions Bank
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
                <Card className="relative border-2 border-primary/20 bg-card/50 shadow-2xl backdrop-blur-sm">
                  <CardHeader className="pb-2 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                      <Brain className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">
                      Interactive Quiz Experience
                    </CardTitle>
                    <CardDescription>
                      Experience the future of exam preparation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-xl bg-muted/50 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium">
                          Mathematics - Algebra
                        </span>
                        <Badge variant="secondary">Question 5/10</Badge>
                      </div>
                      <div className="mb-3 text-sm text-muted-foreground">
                        Solve for x: 2x + 5 = 13
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["x = 4", "x = 6", "x = 8", "x = 9"].map(
                          (option, i) => (
                            <Button
                              key={i}
                              variant={i === 0 ? "default" : "outline"}
                              size="sm"
                              className="justify-start"
                            >
                              {option}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        AI Confidence: 98%
                      </span>
                      <span className="font-medium text-primary">
                        Streak: 12 🔥
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="mb-6 text-balance text-3xl font-bold lg:text-5xl">
              Why Choose QuizerGo?
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
              Our platform combines cutting-edge AI technology with proven
              educational methods to give you the best exam preparation
              experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  activeFeature === index ? "shadow-xl ring-2 ring-primary" : ""
                }`}
              >
                <CardHeader className="pb-2 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} bg-opacity-10`}
                  >
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Subjects
            </Badge>
            <h2 className="mb-6 text-balance text-3xl font-bold lg:text-5xl">
              Master Every Subject
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
              Comprehensive question banks covering all WAEC and JAMB subjects
              with regular updates.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{subject.icon}</div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-semibold">
                        {subject.name}
                      </h3>
                      <Badge variant="secondary" className={subject.color}>
                        {subject.questions} Questions
                      </Badge>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4">
              Success Stories
            </Badge>
            <h2 className="mb-6 text-balance text-3xl font-bold lg:text-5xl">
              Real Results from Real Students
            </h2>
            <p className="mx-auto max-w-3xl text-pretty text-xl text-muted-foreground">
              Join thousands of students who have achieved their dream scores
              with QuizerGo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.exam}
                        </Badge>
                        <span className="text-sm font-medium text-primary">
                          {testimonial.score}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold lg:text-5xl">
              Ready to Ace Your Exams?
            </h2>
            <p className="mb-8 text-pretty text-xl text-muted-foreground">
              Join over 50,000 students who are already using QuizerGo to
              achieve their academic goals. Start your free practice today!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 py-6 text-lg">
                <CheckCircle className="mr-2 h-5 w-5" />
                Start Free Practice
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent px-8 py-6 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
