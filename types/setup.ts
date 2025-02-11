export interface SemesterDates {
  startDate: Date
  endDate: Date
}

export interface SetupData {
  isComplete: boolean
  target: number
  semesterDates: SemesterDates | null
}

