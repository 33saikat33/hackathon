"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AttendanceDialogProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (wasClassHeld: boolean, attended: boolean) => void
  date: Date | undefined
}

export function AttendanceDialog({ isOpen, onClose, onSubmit, date }: AttendanceDialogProps) {
  const [showAttendanceQuestion, setShowAttendanceQuestion] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowAttendanceQuestion(false)
    }
  }, [isOpen])

  const handleClassHeld = (wasHeld: boolean) => {
    if (!wasHeld) {
      onSubmit(false, false)
      onClose()
    } else {
      setShowAttendanceQuestion(true)
    }
  }

  const handleAttendance = (attended: boolean) => {
    onSubmit(true, attended)
    onClose()
  }

  const handleClose = () => {
    setShowAttendanceQuestion(false)
    onClose()
  }

  const dateString = date ? date.toLocaleDateString() : "Selected date"

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle>{dateString}</DialogTitle>
          <DialogDescription>
            {!showAttendanceQuestion ? "Was class held on this day?" : "Did you attend the class?"}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-4 py-4">
          {!showAttendanceQuestion ? (
            <>
              <Button
                onClick={() => handleClassHeld(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleClassHeld(false)}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
              >
                No
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => handleAttendance(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleAttendance(false)}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
              >
                No
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

