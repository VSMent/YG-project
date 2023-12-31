import { useEffect } from 'react'
import chatsData from '../data/chats.json'
import peopleData from '../data/people.json'
import tasksData from '../data/tasks.json'
import recruitingEventData from '../data/recruitingEvents.json'
import equipmentData from '../data/equipment.json'
import kanbanData from '../data/kanban.json'
import saleData from '../data/sale.json'
import {
  useChatStore,
  useKanbanTaskStore,
  useRecruitingEventStore,
  useSaleStore,
  useTaskStore,
  useUserStore,
} from './Stores'
import { HashPassword } from '@utils'
import { PossibleStatuses } from '@type/Task'
import { Chat } from '@type/Chat'
import { Department, PossibleDepartments, User } from '@type/User'
import { RecruitingStatus } from '@type/RecrutingEvent'
import { PossibleStatuses as PossibleKanbanStatuses } from '@type/KanbanTask'

const useDummyUserData = () => {
  const { users, addUserObj } = useUserStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const generatedUsers: User[] = []

      if (users.length == 0) {
        const add = async () => {
          await Promise.all([
            ...peopleData.predefined.map(async (userData) => {
              const common = {
                email: userData.email,
                pass: await HashPassword(userData.pass),
                firstname: userData.firstname,
                lastname: userData.lastname,
              }

              if (userData.role == 'admin' || userData.role == 'user')
                generatedUsers.push({
                  ...common,
                  role: userData.role,
                })
              else if (
                userData.role == 'employee' &&
                PossibleDepartments.includes(<Department>userData.department)
              )
                generatedUsers.push({
                  ...common,
                  role: userData.role,
                  department: <Department>userData.department,
                })
            }),

            ...peopleData.usernames.map(async (username) => {
              const common = {
                email: `${username}@${
                  Math.random() > 0.5 ? 'gmail.com' : 'outlook.com'
                }`,
                pass: await HashPassword(`${username}1234`),
                firstname:
                  peopleData.firstnames[
                    Math.floor(Math.random() * peopleData.firstnames.length)
                  ],
                lastname:
                  peopleData.lastnames[
                    Math.floor(Math.random() * peopleData.lastnames.length)
                  ],
              }

              if (Math.random() > 0.8)
                generatedUsers.push({
                  ...common,
                  role: 'employee',
                  department:
                    PossibleDepartments[
                      Math.floor(Math.random() * PossibleDepartments.length)
                    ],
                })
              else
                generatedUsers.push({
                  ...common,
                  role: 'user',
                })
            }),
          ])

          generatedUsers.forEach((user) => addUserObj(user))
        }
        add().catch(console.log)
      }
    }, 0)

    return () => clearTimeout(timeout)
  })
}

const useDummyChatData = () => {
  const { users } = useUserStore()
  const { chats, addChat } = useChatStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const kindOfRealUsers = users.filter((u) => u.role == 'user')
      const kindOfRealEmployees = users.filter((u) => u.role == 'employee')

      if (chats.length == 0) {
        chatsData.forEach((chatDatum) => {
          const employee =
            kindOfRealEmployees[
              Math.floor(Math.random() * kindOfRealEmployees.length)
            ]
          const user =
            kindOfRealUsers[Math.floor(Math.random() * kindOfRealUsers.length)]

          const c: Chat = {
            id: 0,
            participants: {
              employee: { email: employee.email, name: employee.firstname },
              user: { email: user.email, name: user.firstname },
            },
            messages: [],
          }
          chatDatum.forEach((messageDatum) => {
            c.messages.push({
              authorEmail: messageDatum[0] == 'e' ? employee.email : user.email,
              body: messageDatum[1],
              time: new Date(messageDatum[2]),
            })
          })
          addChat(c)
        })
      }
    }, 0)

    return () => {
      clearTimeout(timeout)
    }
  })
}

const useDummyTaskData = () => {
  const { tasks, addTask } = useTaskStore()
  const { findUsersByDepartment } = useUserStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const marketingEmployees = findUsersByDepartment('marketing')
      const personnelEmployees = findUsersByDepartment('personnel')

      if (tasks.length == 0) {
        tasksData.forEach((taskDatum) => {
          const employees =
            taskDatum.department == 'marketing'
              ? marketingEmployees
              : personnelEmployees
          addTask(
            taskDatum.title,
            taskDatum.body,
            employees[Math.floor(Math.random() * employees.length)].email,
            PossibleStatuses[
              Math.floor(Math.random() * PossibleStatuses.length)
            ]
          )
        })
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])
}

const useDummyRecruitingEventData = () => {
  const { events, addEvent } = useRecruitingEventStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (events.length === 0) {
        recruitingEventData.forEach((eventData) => {
          addEvent(
            eventData.title,
            eventData.description,
            <RecruitingStatus>eventData.status
          )
        })
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])
}

const useDummyKanbanData = () => {
  const { kanbanTasks, addKanbanTask } = useKanbanTaskStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (kanbanTasks.length === 0) {
        kanbanData.forEach((kanbanDatum) => {
          addKanbanTask(
            kanbanDatum.name,
            kanbanDatum.description,
            PossibleKanbanStatuses[
              Math.floor(Math.random() * PossibleKanbanStatuses.length)
            ]
          )
        })
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])
}

const useDummySaleData = () => {
  const { sales, addSale } = useSaleStore()
  const { users } = useUserStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sales.length === 0) {
        const customers = users.filter((u) => u.role == 'user')
        const employees = users.filter((u) => u.role == 'employee')
        saleData.forEach((saleDatum) => {
          addSale(
            saleDatum.product,
            saleDatum.quantity,
            saleDatum.price,
            customers[Math.floor(Math.random() * customers.length)].email,
            employees[Math.floor(Math.random() * employees.length)].email,
            new Date(saleDatum.date)
          )
        })
      }
    }, 0)

    return () => clearTimeout(timeout)
  }, [])
}

export {
  useDummyUserData,
  useDummyChatData,
  useDummyTaskData,
  useDummyRecruitingEventData,
  useDummyKanbanData,
  useDummySaleData,
}
