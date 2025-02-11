"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { useAttendance } from "../../hooks/useAttendance"
import { AttendanceDialog } from "../../components/attendance-dialog"
import { SettingsDialog } from "../../components/settings-dialog"
import { useSetup } from "../../context/setup-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function AttendanceManager() {
  const { setupData } = useSetup()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const { records, target, currentPercentage, markAttendance } = useAttendance(
    setupData.semesterDates || {
      startDate: new Date(),
      endDate: new Date(),
    },
  )

  useEffect(() => {
    // Only show dialog for today's date on initial load
    const today = new Date()
    const todayStr = today.toISOString().split("T")[0]
    const hasMarkedToday = records.some((r) => r.date === todayStr)

    if (!hasMarkedToday && today.getDay() !== 0) {
      setSelectedDate(today)
      setIsDialogOpen(true)
    }
  }, [records]) // Added records dependency to prevent re-triggering

  const handleDateSelect = (date: Date | undefined) => {
    if (date && date.getDay() !== 0) {
      // Prevent selection of Sundays
      setSelectedDate(date)
      setIsDialogOpen(true)
    }
  }

  const handleAttendanceSubmit = (wasClassHeld: boolean, attended: boolean) => {
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split("T")[0]
      markAttendance(dateStr, wasClassHeld, attended)
      setIsDialogOpen(false)
      setSelectedDate(undefined)
    }
  }

  // Update modifiers to use exact date string comparison
  const modifiers = {
    attended: records
      .filter((r) => r.wasClassHeld && r.attended)
      .map((r) => {
        const date = new Date(r.date)
        date.setHours(0, 0, 0, 0)
        return date
      }),
    missed: records
      .filter((r) => r.wasClassHeld && !r.attended)
      .map((r) => {
        const date = new Date(r.date)
        date.setHours(0, 0, 0, 0)
        return date
      }),
    noClass: records
      .filter((r) => !r.wasClassHeld)
      .map((r) => {
        const date = new Date(r.date)
        date.setHours(0, 0, 0, 0)
        return date
      }),
  }

  const modifiersStyles = {
    attended: { color: "white", backgroundColor: "#10B981" },
    missed: { color: "white", backgroundColor: "#EF4444" },
    noClass: { color: "inherit", backgroundColor: "transparent" },
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 p-6">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/" className="inline-block mb-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>

        <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Current Progress</h2>
                <p className="text-sm text-muted-foreground">Target: {target}%</p>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                {currentPercentage}%
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur">
          <CardContent className="pt-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              modifiers={{ ...modifiers, today: [today] }}
              modifiersStyles={{
                ...modifiersStyles,
                today: { border: "2px solid #3B82F6" },
              }}
              className="rounded-md"
              disabled={(date) => {
                if (!setupData.semesterDates) return false
                return (
                  date > today ||
                  date < new Date(setupData.semesterDates.startDate) ||
                  date > new Date(setupData.semesterDates.endDate) ||
                  date.getDay() === 0
                )
              }}
            />
          </CardContent>
        </Card>

        <Button
          onClick={() => setIsSettingsOpen(true)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600"
        >
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>

        <AttendanceDialog
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false)
            setSelectedDate(undefined)
          }}
          onSubmit={handleAttendanceSubmit}
          date={selectedDate}
        />

        <SettingsDialog isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      </div>
    </div>
  )
}

