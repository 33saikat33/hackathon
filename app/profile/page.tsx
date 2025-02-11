"use client"

import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">JD</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white">John Doe</h1>
            <p className="text-gray-600 dark:text-gray-300">john@example.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-t dark:border-gray-700 pt-4">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                <p className="text-black dark:text-white">John Doe</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
                <p className="text-black dark:text-white">john@example.com</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Role</label>
                <p className="text-black dark:text-white">Student</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Join Date</label>
                <p className="text-black dark:text-white">January 1, 2024</p>
              </div>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Attendance Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Classes</p>
                <p className="text-2xl font-bold text-black dark:text-white">120</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
                <p className="text-2xl font-bold text-green-600">110</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Absent</p>
                <p className="text-2xl font-bold text-red-600">10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
} 