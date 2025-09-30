"use client";
import { Brain, Play, Trophy, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../uis/button";

import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const Landing = () => {
  const { token } = useSelector((state: RootState) => state.auth);
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
    // <section className="container mx-auto grid gap-4 px-8 py-16 lg:grid-cols-4">
    <section className="relative overflow-hidden py-20 lg:py-32">
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
                <span className="text-accent">JAMB</span> with Confidence
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
                      <span className="font-medium">Mathematics - Algebra</span>
                      <Badge variant="secondary">Question 5/10</Badge>
                    </div>
                    <div className="mb-3 text-sm text-muted-foreground">
                      Solve for x: 2x + 5 = 13
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["x = 4", "x = 6", "x = 8", "x = 9"].map((option, i) => (
                        <Button
                          key={i}
                          variant={i === 0 ? "default" : "outline"}
                          size="sm"
                          className="justify-start"
                        >
                          {option}
                        </Button>
                      ))}
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
  );
};

export default Landing;
