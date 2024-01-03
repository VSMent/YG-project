const PossibleStatuses = ['Backlog', 'InProgress', 'QA', 'Complete'] as const

type KanbanStatus = (typeof PossibleStatuses)[number]

type KanbanTask = {
  id: number
  name: string
  description: string
  status: KanbanStatus
}

export type { KanbanTask, KanbanStatus }
export { PossibleStatuses }
