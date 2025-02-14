"use client"

import { useState, useEffect } from 'react'

export default function Progress() {
  const [mounted, setMounted] = useState(false)
  const targetProgress = 75

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Current Progress</h2>
        <div className="text-gray-600">
          Target: {targetProgress}%
        </div>
      </div>
    </div>
  )
} 