import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Cookie,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Cookie Policy | QuizerGo",
  description:
    "Learn about how QuizerGo uses cookies to enhance your learning experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-balance text-4xl font-bold">Cookie Policy</h1>
              <p className="text-lg text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Cookies are small text files stored on your device when you visit
              our website. They help us provide you with a better, more
              personalized learning experience on QuizerGo by remembering your
              preferences and tracking your progress.
            </p>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Your Control:</strong> You can control and delete
                cookies through your browser settings. However, some features
                may not work properly without certain cookies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Types of Cookies */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Essential Cookies */}
              <div className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold">Essential Cookies</h3>
                  </div>
                  <Badge variant="secondary">Always Active</Badge>
                </div>
                <p className="mb-3 text-muted-foreground">
                  These cookies are necessary for the website to function
                  properly and cannot be disabled.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Authentication</span>
                    <span className="text-muted-foreground">
                      Keeps you logged in
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Security</span>
                    <span className="text-muted-foreground">
                      Protects against fraud
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Session Management</span>
                    <span className="text-muted-foreground">
                      Maintains your quiz progress
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">
                      Performance Cookies
                    </h3>
                  </div>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="mb-3 text-muted-foreground">
                  These cookies help us understand how you use our platform to
                  improve performance and user experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Page Load Times</span>
                    <span className="text-muted-foreground">
                      Optimize loading speed
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Error Tracking</span>
                    <span className="text-muted-foreground">
                      Identify and fix issues
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Feature Usage</span>
                    <span className="text-muted-foreground">
                      Improve popular features
                    </span>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                  </div>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="mb-3 text-muted-foreground">
                  These cookies provide insights into how students use QuizerGo
                  to help us create better educational content.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Study Patterns</span>
                    <span className="text-muted-foreground">
                      Understand learning habits
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Popular Subjects</span>
                    <span className="text-muted-foreground">
                      Improve content quality
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">User Journey</span>
                    <span className="text-muted-foreground">
                      Enhance navigation
                    </span>
                  </div>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-orange-600" />
                    <h3 className="text-lg font-semibold">
                      Personalization Cookies
                    </h3>
                  </div>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="mb-3 text-muted-foreground">
                  These cookies remember your preferences to provide a
                  customized learning experience.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Theme Preferences</span>
                    <span className="text-muted-foreground">
                      Dark/light mode settings
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Subject Preferences</span>
                    <span className="text-muted-foreground">
                      Favorite subjects and topics
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">AI Assistance Level</span>
                    <span className="text-muted-foreground">
                      Chatbot interaction preferences
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                We use trusted third-party services that may set their own
                cookies to provide enhanced functionality:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-muted/30 p-4">
                  <h4 className="mb-2 font-semibold">Google Analytics</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Helps us understand user behavior and improve our platform.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-primary hover:underline"
                    >
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                <div className="rounded-lg bg-muted/30 p-4">
                  <h4 className="mb-2 font-semibold">AI Services</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Powers our chatbot and personalized learning
                    recommendations.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Data processed securely with privacy protection
                  </p>
                </div>

                <div className="rounded-lg bg-muted/30 p-4">
                  <h4 className="mb-2 font-semibold">CDN Services</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Ensures fast loading of educational content and images.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Technical cookies for content delivery
                  </p>
                </div>

                <div className="rounded-lg bg-muted/30 p-4">
                  <h4 className="mb-2 font-semibold">Payment Processing</h4>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Secure handling of subscription and payment information.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PCI-compliant security standards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* added some other comments */}
          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Browser Settings</h3>
                <p className="mb-4 text-muted-foreground">
                  You can control cookies through your browser settings.
                  Here&apos;s how to manage cookies in popular browsers:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-3">
                    <h4 className="mb-1 font-medium">Chrome</h4>
                    <p className="text-sm text-muted-foreground">
                      Settings → Privacy and Security → Cookies
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <h4 className="mb-1 font-medium">Firefox</h4>
                    <p className="text-sm text-muted-foreground">
                      Options → Privacy & Security → Cookies
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <h4 className="mb-1 font-medium">Safari</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferences → Privacy → Cookies
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <h4 className="mb-1 font-medium">Edge</h4>
                    <p className="text-sm text-muted-foreground">
                      Settings → Privacy → Cookies
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-3 text-lg font-semibold">
                  Impact of Disabling Cookies
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500"></div>
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                        Essential Cookies Disabled
                      </h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        You may not be able to log in or access your quiz
                        progress.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">
                        Analytics Cookies Disabled
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        We won&apos;t be able to improve the platform based on
                        usage patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></div>
                    <div>
                      <h4 className="font-medium text-purple-800 dark:text-purple-200">
                        Personalization Cookies Disabled
                      </h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Your preferences won&apos;t be saved, and you&apos;ll
                        see generic content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Questions About Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                If you have questions about our use of cookies or need help
                managing your preferences, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> privacy@quizergo.com
                </p>
                <p>
                  <strong>Subject Line:</strong> Cookie Policy Inquiry
                </p>
                <p>
                  <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            This cookie policy is effective as of December 2024 and may be
            updated to reflect changes in our practices.
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="ml-2 text-primary hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
