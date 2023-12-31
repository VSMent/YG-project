import { useTaskStore } from '@hooks/Stores'
import { Department, User } from '@type/User'
import { Task } from '@type/Task'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'

type EmployeeCardProps = {
  user: User
  tasks: { [key: string]: Task[] }
  clickHandler: (tasks: Task[]) => void
  department: Department
}
const TaskCountRow = ({
  label,
  count,
  clickHandler,
  renderActive = false,
}: {
  label: string
  count: number
  clickHandler: () => void
  renderActive?: boolean
}) => {
  return (
    <div
      onClick={clickHandler}
      className={
        'group flex cursor-pointer select-none justify-between rounded-full px-2 active:bg-muted-foreground/20 ' +
        (renderActive ? 'bg-muted-foreground/10 ' : ' ')
      }
    >
      <p
        className={
          'mr-4 group-hover:underline ' +
          (renderActive ? ' ' : 'group-hover:mx-2 ')
        }
      >
        {label}:
      </p>{' '}
      <p>{count}</p>
    </div>
  )
}

const EmployeeCard = ({
  user,
  tasks,
  clickHandler,
  department,
}: EmployeeCardProps) => {
  const { activeSelection, setActiveTaskSelection } = useTaskStore()
  return (
    <Card className={'bg-muted'} key={user.email}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium leading-none">
                  {`${user.firstname} ${user.lastname}`}
                </p>
              </div>
            </div>
          </div>
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="flex w-max flex-row gap-2">
        <div className="flex flex-col">
          <TaskCountRow
            label={'Запланованих завдань'}
            count={tasks['New']?.length ?? 0}
            clickHandler={() => {
              setActiveTaskSelection(department, user.email, 'New')
              clickHandler(tasks['New'] ?? [])
            }}
            renderActive={
              activeSelection[department]?.email == user.email &&
              activeSelection[department]?.status == 'New'
            }
          />
          <TaskCountRow
            label={'Завдань у прогресі'}
            count={tasks['InProgress']?.length ?? 0}
            clickHandler={() => {
              setActiveTaskSelection(department, user.email, 'InProgress')
              clickHandler(tasks['InProgress'] ?? [])
            }}
            renderActive={
              activeSelection[department]?.email == user.email &&
              activeSelection[department]?.status == 'InProgress'
            }
          />
          <TaskCountRow
            label={'Завдань на перевірці'}
            count={tasks['InCheck']?.length ?? 0}
            clickHandler={() => {
              setActiveTaskSelection(department, user.email, 'InCheck')
              clickHandler(tasks['InCheck'] ?? [])
            }}
            renderActive={
              activeSelection[department]?.email == user.email &&
              activeSelection[department]?.status == 'InCheck'
            }
          />
          <TaskCountRow
            label={'Виконаних завдань'}
            count={tasks['Done']?.length ?? 0}
            clickHandler={() => {
              setActiveTaskSelection(department, user.email, 'Done')
              clickHandler(tasks['Done'] ?? [])
            }}
            renderActive={
              activeSelection[department]?.email == user.email &&
              activeSelection[department]?.status == 'Done'
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}
export default EmployeeCard
