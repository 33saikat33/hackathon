"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSetup } from "../context/setup-context"

export function SetupWizard() {
  const [step, setStep] = useState(1)
  const { updateSetup } = useSetup()
  const [dates, setDates] = useState<{ start?: Date; end?: Date }>({})
  const [target, setTarget] = useState(75)

  const handleComplete = () => {
    if (dates.start && dates.end) {
      updateSetup({
        isComplete: true,
        target,
        semesterDates: {
          startDate: dates.start,
          endDate: dates.end,
        },
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {step === 1 ? "Set Your Semester Dates" : "Set Your Attendance Target"}
          </CardTitle>
        </CardHeader>
        <CardContent>
         {step === 1 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Select Semester Start Date</Label>
                <Calendar
                  mode="single"
                  selected={dates.start}
                  onSelect={(date) => setDates((prev) => ({ ...prev, start: date }))}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <Label>Select Semester End Date</Label>
                <Calendar
                  mode="single"
                  selected={dates.end}
                  onSelect={(date) => setDates((prev) => ({ ...prev, end: date }))}
                  className="rounded-md border"
                />
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => setStep(2)}
                disabled={!dates.start || !dates.end}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Set Your Target Attendance Percentage</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(Number(e.target.value))}
                    className="text-2xl"
                    min={0}
                    max={100}
                  />
                  <span className="text-2xl">%</span>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={handleComplete}
              >
                Complete Setup
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

