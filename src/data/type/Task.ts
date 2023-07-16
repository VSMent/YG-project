const PossibleStatuses = ['New', 'InProgress', 'InCheck', 'Done'] as const

type Status = (typeof PossibleStatuses)[number]
type Task = {
  id: number
  title: string
  body: string
  status: Status
  assigneeEmail: string
}

export type { Task, Status }
export { PossibleStatuses }
