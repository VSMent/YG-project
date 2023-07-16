const PossibleStatuses = [
  'OpenPosition',
  'Interview',
  'ClosedPosition',
] as const

type RecruitingStatus = (typeof PossibleStatuses)[number]

type RecruitingEvent = {
  id: number
  title: string
  description: string
  status: RecruitingStatus
}

export type { RecruitingEvent, RecruitingStatus }
export { PossibleStatuses }
