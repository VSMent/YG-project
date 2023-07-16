import { useEffect, useState } from 'react'
import HorizontalCardScroll from '../HorizontalCardScroll'
import VerticalListScroll from '../VerticalListScroll'
import EmployeeCard from './EmployeeCard'
import TaskRow from './TaskRow'
import { useTaskStore, useUserStore } from '@utils/Stores'
import { Department } from '@type/User'
import { Task } from '@type/Task'

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
      <HorizontalCardScroll>
        {users.map((user) => (
          <EmployeeCard
            key={user.login}
            department={department}
            user={user}
            tasks={userTasks[user.login]}
            clickHandler={updateActive}
          />
        ))}
      </HorizontalCardScroll>
      <VerticalListScroll>
        {activeTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </VerticalListScroll>
    </>
  )
}
export default DepartmentContent
