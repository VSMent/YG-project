type Status = 'New' | 'InProgress' | 'InCheck' | 'Done'
type Task = {
  id: number
  title: string
  body: string
  status: Status
  assigneeEmail: string
}

export type { Task, Status }
