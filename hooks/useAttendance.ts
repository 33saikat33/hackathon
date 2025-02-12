"use client"

import { useState, useEffect } from "react"
import type { AttendanceRecord, AttendanceTarget } from "../types/attendance"
import type { SemesterDates } from "../types/setup"

export function useAttendance(semesterDates: SemesterDates) {
  const [records, setRecords] = useState<AttendanceRecord[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("attendance-records")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const [target, setTarget] = useState<AttendanceTarget>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("attendance-target")
      return saved ? JSON.parse(saved) : { current: 0, target: 70 }
    }
    return { current: 0, target: 70 }
  })

  useEffect(() => {
    localStorage.setItem("attendance-records", JSON.stringify(records))
  }, [records])

  useEffect(() => {
    localStorage.setItem("attendance-target", JSON.stringify(target))
  }, [target])

  const calculatePercentage = () => {
    if (!semesterDates || !semesterDates.startDate || !semesterDates.endDate) {
      return 0 // Return 0% if semester dates are not set
    }

    const { startDate, endDate } = semesterDates
    const start = new Date(startDate)
    const end = new Date(endDate)

    let totalClassDays = 0
    let attendedDays = 0

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getDay() !== 0) {
        // Skip Sundays
        totalClassDays++
        const record = records.find((r) => r.date === d.toISOString().split("T")[0])
        if (record && record.wasClassHeld && record.attended) {
          attendedDays++
        }
      }
    }

    return totalClassDays === 0 ? 0 : Math.round((attendedDays / totalClassDays) * 100)
  }

  const markAttendance = (date: string, wasClassHeld: boolean, attended: boolean) => {
    setRecords((prev) => {
      const existing = prev.find((r) => r.date === date)
      if (existing) {
        return prev.map((r) => (r.date === date ? { date, wasClassHeld, attended } : r))
      }
      return [...prev, { date, wasClassHeld, attended }]
    })
  }

  const updateTarget = (newTarget: number) => {
    setTarget((prev) => ({ ...prev, target: newTarget }))
  }

  return {
    records,
    target: target.target,
    currentPercentage: calculatePercentage(),
    markAttendance,
    updateTarget,
  }
}
