"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { SetupData, SemesterDates } from "../types/setup"

interface SetupContextType {
  setupData: SetupData
  updateSetup: (data: Partial<SetupData>) => void
  isSetupComplete: boolean
  updateTarget: (target: number) => void
  updateSemesterDates: (dates: SemesterDates) => void
}

const SetupContext = createContext<SetupContextType | undefined>(undefined)

export function SetupProvider({ children }: { children: React.ReactNode }) {
  const [setupData, setSetupData] = useState<SetupData>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("setup-data")
      return saved
        ? JSON.parse(saved)
        : {
            isComplete: false,
            target: 75,
            semesterDates: null,
          }
    }
    return {
      isComplete: false,
      target: 75,
      semesterDates: null,
    }
  })

  useEffect(() => {
    localStorage.setItem("setup-data", JSON.stringify(setupData))
  }, [setupData])

  const updateSetup = (data: Partial<SetupData>) => {
    setSetupData((prev) => ({ ...prev, ...data }))
  }

  const updateTarget = (target: number) => {
    setSetupData((prev) => ({ ...prev, target }))
  }

  const updateSemesterDates = (dates: SemesterDates) => {
    setSetupData((prev) => ({ ...prev, semesterDates: dates }))
  }

  return (
    <SetupContext.Provider
      value={{
        setupData,
        updateSetup,
        isSetupComplete: setupData.isComplete,
        updateTarget,
        updateSemesterDates,
      }}
    >
      {children}
    </SetupContext.Provider>
  )
}

export const useSetup = () => {
  const context = useContext(SetupContext)
  if (!context) throw new Error("useSetup must be used within SetupProvider")
  return context
}

