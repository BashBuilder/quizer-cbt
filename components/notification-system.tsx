"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Bell, CheckCircle, AlertCircle, Info, Trophy } from "lucide-react"

interface Notification {
  id: string
  type: "success" | "warning" | "info" | "achievement"
  title: string
  message: string
  timestamp: Date
  action?: {
    label: string
    onClick: () => void
  }
  autoClose?: boolean
  duration?: number
}

const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "achievement",
    title: "New Achievement Unlocked!",
    message: "You've completed 5 quizzes in a row. Keep up the great work!",
    timestamp: new Date(Date.now() - 5000),
    autoClose: false,
  },
  {
    id: "2",
    type: "info",
    title: "Study Reminder",
    message: "Don't forget to practice Mathematics today. You're doing great!",
    timestamp: new Date(Date.now() - 30000),
    action: {
      label: "Start Practice",
      onClick: () => console.log("Navigate to practice"),
    },
    autoClose: true,
    duration: 10000,
  },
  {
    id: "3",
    type: "success",
    title: "Quiz Completed",
    message: "Great job! You scored 85% on your Physics quiz.",
    timestamp: new Date(Date.now() - 60000),
    autoClose: true,
    duration: 8000,
  },
]

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotificationCenter, setShowNotificationCenter] = useState(false)

  useEffect(() => {
    // Simulate receiving notifications
    const timer = setTimeout(() => {
      setNotifications(sampleNotifications)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Auto-close notifications
    notifications.forEach((notification) => {
      if (notification.autoClose && notification.duration) {
        setTimeout(() => {
          removeNotification(notification.id)
        }, notification.duration)
      }
    })
  }, [notifications])

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case "info":
        return <Info className="h-5 w-5 text-blue-600" />
      case "achievement":
        return <Trophy className="h-5 w-5 text-purple-600" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return "border-green-200 bg-green-50"
      case "warning":
        return "border-yellow-200 bg-yellow-50"
      case "info":
        return "border-blue-200 bg-blue-50"
      case "achievement":
        return "border-purple-200 bg-purple-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  return (
    <>
      {/* Floating Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {notifications.slice(0, 3).map((notification) => (
          <Card
            key={notification.id}
            className={`shadow-lg animate-in slide-in-from-right-full duration-300 ${getNotificationColor(notification.type)}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  {notification.action && (
                    <Button size="sm" className="mt-2 h-7 text-xs" onClick={notification.action.onClick}>
                      {notification.action.label}
                    </Button>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
                  onClick={() => removeNotification(notification.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Notification Bell */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="relative bg-background/80 backdrop-blur-sm"
          onClick={() => setShowNotificationCenter(!showNotificationCenter)}
        >
          <Bell className="h-4 w-4" />
          {notifications.length > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center">
              {notifications.length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Notification Center */}
      {showNotificationCenter && (
        <div className="fixed top-16 left-4 z-50 w-80">
          <Card className="shadow-xl bg-background/95 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Notifications</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNotificationCenter(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Stay updated with your learning progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No new notifications</p>
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {notification.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 opacity-50 hover:opacity-100"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
