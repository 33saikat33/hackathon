import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { auth, db } from '@/firebase/firebase'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
