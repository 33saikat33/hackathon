export interface AttendanceRecord {
  date: string
  wasClassHeld: boolean
  attended: boolean
}

export interface AttendanceTarget {
  current: number
  target: number
}

