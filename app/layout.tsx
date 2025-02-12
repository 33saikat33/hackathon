"use client"

import './globals.css'
import { ThemeProvider } from 'next-themes'
import { SetupProvider } from "../context/setup-context"
import { AuthProvider } from "../context/auth-context"
import ThemeToggle from "../components/theme-toggle"
import Image from 'next/image'
import Link from 'next/link'
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
                  <div className="flex items-center gap-4">
                    <Link href="/profile" className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src="/htt.jpg"
                          alt="Profile"
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  </div>
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

