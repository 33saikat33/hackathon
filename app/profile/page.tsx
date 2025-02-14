"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'

export default function Profile() {
  const router = useRouter()
  const [imageSrc, setImageSrc] = useState('/htt.jpg')  // This is already set to use your image

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Priya Bhunia</h1>
            <p className="text-gray-600 dark:text-gray-300">priyabhunia39@gmail.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-t dark:border-gray-700 pt-4">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                <p className="text-black dark:text-white">Priya Bhunia</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
                <p className="text-black dark:text-white">priyabhunia39@gmail.com</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Role</label>
                <p className="text-black dark:text-white">Student Developer</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-400">Join Date</label>
                <p className="text-black dark:text-white">March 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">Attendance Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Classes</p>
                <p className="text-2xl font-bold text-black dark:text-white">38</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
                <p className="text-2xl font-bold text-green-600">11</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-600 dark:text-gray-400">Absent</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
} 