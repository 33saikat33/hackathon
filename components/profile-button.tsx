"use client"

import { useAuth } from "../context/auth-context"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import Link from "next/link"

export function ProfileButton() {
  const { user, logout } = useAuth()

  if (!user) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" asChild>
        <Link href="/profile">
          <User className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Profile</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" onClick={logout}>
        <LogOut className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Logout</span>
      </Button>
    </div>
  )
}

