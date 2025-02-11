"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { useSetup } from "../context/setup-context"

interface SettingsDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsDialog({ isOpen, onClose }: SettingsDialogProps) {
  const { setupData, updateTarget, updateSemesterDates } = useSetup()
  const [target, setTarget] = useState(setupData.target)
  const [startDate, setStartDate] = useState<Date | undefined>(setupData.semesterDates?.startDate)
  const [endDate, setEndDate] = useState<Date | undefined>(setupData.semesterDates?.endDate)

  const handleSave = () => {
    updateTarget(target)
    if (startDate && endDate) {
      updateSemesterDates({ startDate, endDate })
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-800 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Update your attendance target and semester dates.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2 max-h-[70vh] overflow-y-auto">
          <div className="space-y-1">
            <Label htmlFor="target">Attendance Target (%)</Label>
            <Input
              id="target"
              type="number"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              min={0}
              max={100}
            />
          </div>
          <div className="space-y-1">
            <Label>Semester Start Date</Label>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              className="rounded-md border w-full max-w-[250px] mx-auto"
            />
          </div>
          <div className="space-y-1">
            <Label>Semester End Date</Label>
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              className="rounded-md border w-full max-w-[250px] mx-auto"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

