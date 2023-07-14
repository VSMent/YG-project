import { useEffect, useState } from 'react'
import { ScrollArea } from '../ScrollArea'
import { useTaskStore, useUserStore } from '../../Utils/Stores'
import { Task } from '../../data/Task'
import { Department } from '../../data/User'
import EmployeeCard from './EmployeeCard'
import TaskRow from './TaskRow'

type DepartmentBlockProps = {
  department: Department
}
const DepartmentContent = ({ department }: DepartmentBlockProps) => {
  const { findUsersByDepartment } = useUserStore()
  const { activeSelection, findTasksForEmployee, sortTasksByStatuses } =
    useTaskStore()
  const [activeTasks, setActiveTasks] = useState<Task[]>([])

  const updateActive = (tasks: Task[]) => setActiveTasks(tasks)

  const users = findUsersByDepartment(department) ?? []
  const userTasks: { [email: string]: { [status: string]: Task[] } } = {}

  users.forEach((user) => {
    userTasks[user.login] = sortTasksByStatuses(
      findTasksForEmployee(user.login)
    )
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Object.hasOwn(activeSelection, department)) {
        const deptTasks = activeSelection[department]
        setActiveTasks(userTasks[deptTasks.email][deptTasks.status])
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {' '}
      <ScrollArea
        orientation="horizontal"
        className={
          'rounded-md border  p-4 text-base ' +
          // fix radix viewport display
          '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
          '[&>[data-radix-scroll-area-viewport]>div]:gap-3 '
        }
      >
        {users.map((user) => (
          <EmployeeCard
            key={user.login}
            department={department}
            user={user}
            tasks={userTasks[user.login]}
            clickHandler={updateActive}
          />
        ))}
      </ScrollArea>
      <ScrollArea
        className={
          'flex-[1_0_1px] rounded-md border bg-muted p-4 text-base ' +
          // fix radix viewport display
          '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
          '[&>[data-radix-scroll-area-viewport]>div]:flex-col ' +
          '[&>[data-radix-scroll-area-viewport]>div]:gap-3 '
        }
      >
        {activeTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </ScrollArea>
    </>
  )
}
export default DepartmentContent
