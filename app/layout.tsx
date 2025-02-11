"use client"

import './globals.css'
import { ThemeProvider } from 'next-themes'
import { SetupProvider } from "../context/setup-context"
import { AuthProvider } from "../context/auth-context"
import ThemeToggle from "../components/theme-toggle"
import { ProfileButton } from "../components/profile-button"
import type { ReactNode } from "react"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <SetupProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="min-h-screen bg-background text-foreground">
                <header className="p-4 flex justify-between items-center border-b">
                  <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <h1 className="text-xl font-semibold">Attendance Tracker</h1>
                  </div>
                  <ProfileButton />
                </header>
                <main>{children}</main>
              </div>
            </ThemeProvider>
          </SetupProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

