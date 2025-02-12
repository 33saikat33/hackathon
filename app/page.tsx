"use client"

import ThemeToggle from "@/components/theme-toggle"
import ProfileDropdown from "@/components/ProfileDropdown"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  const handleSignUp = () => {
    router.push('/signup')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-white-500">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <h1 className="text-xl font-bold"></h1>
        </div>
        <div className="flex items-center gap-4">
          <ProfileDropdown />
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
        <h1 className="text-4xl font-bold text-white mb-2">Attendance Tracker</h1>
        <p className="text-white mb-8">Track your attendance with ease</p>
        <button
          onClick={() => window.location.href = '/login'}
          className="w-64 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => window.location.href = '/signup'}
          className="w-64 bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </main>
  )
}

// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn