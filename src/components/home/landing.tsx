"use client";
/* eslint-disable */

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
import { features, subjects, testimonials } from "@/data/constants";

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

  return (
    <div className="bg-background min-h-screen px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-12">
        <div className="from-primary/5 via-background to-accent/5 absolute inset-0 bg-gradient-to-br" />
        <div className="relative container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Zap className="mr-2 h-4 w-4" />
                  AI-Powered Learning Platform
                </Badge>
                <h1 className="text-4xl leading-tight font-bold text-balance lg:text-6xl">
                  Master <span className="text-primary">WAEC</span> &{" "}
                  <span className="text-emerald-500">JAMB</span> with Confidence
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed text-pretty">
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
                  <div className="text-primary text-2xl font-bold">50K+</div>
                  <div className="text-muted-foreground text-sm">
                    Active Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">15K+</div>
                  <div className="text-muted-foreground text-sm">
                    Questions Bank
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">95%</div>
                  <div className="text-muted-foreground text-sm">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="from-primary/20 to-accent/20 absolute inset-0 rounded-3xl bg-gradient-to-r blur-3xl" />
                <Card className="border-primary/20 bg-card/50 relative border-2 shadow-2xl backdrop-blur-sm">
                  <CardHeader className="pb-2 text-center">
                    <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                      <Brain className="text-primary-foreground h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">
                      Interactive Quiz Experience
                    </CardTitle>
                    <CardDescription>
                      Experience the future of exam preparation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium">
                          Mathematics - Algebra
                        </span>
                        <Badge variant="secondary">Question 5/10</Badge>
                      </div>
                      <div className="text-muted-foreground mb-3 text-sm">
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
                      <span className="text-primary font-medium">
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
            <h2 className="mb-6 text-3xl font-bold text-balance lg:text-5xl">
              Why Choose QuizerGo?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl text-pretty">
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
                  activeFeature === index ? "ring-primary shadow-xl ring-2" : ""
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
                  <p className="text-muted-foreground text-center leading-relaxed">
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
            <h2 className="mb-6 text-3xl font-bold text-balance lg:text-5xl">
              Master Every Subject
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl text-pretty">
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
                    <ArrowRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
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
            <h2 className="mb-6 text-3xl font-bold text-balance lg:text-5xl">
              Real Results from Real Students
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl text-pretty">
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
                        <span className="text-primary text-sm font-medium">
                          {testimonial.score}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
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
        <div className="from-primary to-accent absolute inset-0 bg-gradient-to-r opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-balance lg:text-5xl">
              Ready to Ace Your Exams?
            </h2>
            <p className="text-muted-foreground mb-8 text-xl text-pretty">
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
