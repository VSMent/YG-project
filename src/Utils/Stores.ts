/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { produce, setAutoFreeze } from 'immer'
import { Department, User } from '../data/User'
import { Chat, Message } from '../data/Chat'
import { Task, Status } from '../data/Task'

// setAutoFreeze(false)
type UserStore = {
  users: User[]
  currentUser: User | null
  str: string
  wipeUsers: () => void
  addUserObj: (user: User) => void
  registerUser: (login: string, pass: string) => void
  findUserByLogin: (login: string) => User | null
  findUsersByDepartment: (department: Department) => User[]
  logInUser: (user: User) => void
  logOut: () => void
}
export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        users: [],
        currentUser: null,
        str: 'test',
        wipeUsers: () => set({ users: [] }, false, 'wipeUsers'),
        addUserObj: (user) => {
          set(
            produce((state) => {
              state.users.push(user)
            }),
            false,
            `addUser as Object ${user.login}`
          )
        },
        registerUser: (login, pass) => {
          const user: User = {
            login: login,
            pass: pass,
            firstname: '',
            lastname: '',
            role: 'user',
          }
          set(
            produce((state) => {
              state.users.push(user)
            }),
            false,
            `registerUser ${user.login}`
          )
        },
        findUserByLogin: (login) =>
          get().users.filter((user) => user.login === login)[0] ?? null,
        findUsersByDepartment: (department) =>
          get().users.filter(
            (user) => user.role == 'employee' && user.department == department
          ),
        logInUser: (user) => {
          set(() => ({ currentUser: user }), false, `logInUser ${user.login}`)
        },
        logOut: () => {
          set(() => ({ currentUser: null }), false, 'logOut')
        },
      }),
      { name: 'users' }
    ),
    { name: 'users' }
  )
)

type ChatStore = {
  chats: Chat[]
  lastChatId: number
  addChat: (chat: Chat) => Chat
  addChatMessage: (
    chatId: number,
    author: string,
    body: string,
    time?: Date
  ) => void
  wipeChats: () => void
  findChatById: (chatId: number) => Chat | null
}
export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (set, get) => ({
        chats: [],
        lastChatId: 0,
        wipeChats: () => set({ chats: [] }, false, 'wipeChats'),
        addChat: (chat) => {
          const newChat: Chat = { ...chat, id: ++get().lastChatId }
          set(
            produce((state) => {
              state.chats.push(newChat)
            }),
            false,
            `addChat ${chat.id}`
          )
          return chat
        },
        addChatMessage: (chatId, author, body, time) => {
          const chatIndex = get().chats.findIndex((ch) => ch.id == chatId)
          if (chatIndex < 0) return
          const message: Message = {
            authorEmail: author,
            body: body,
            time: time ?? new Date(),
          }
          set(
            produce((state) => {
              state.chats[chatIndex].messages.push(message)
            }),
            true,
            `add message to chat ${chatId}`
          )
        },
        findChatById: (chatId) =>
          get().chats.filter((chat) => chat.id == chatId)[0] ?? null,
      }),
      {
        name: 'chats',
        onRehydrateStorage: () => (state) => {
          state?.chats.forEach((chat) =>
            chat.messages.forEach(
              (message) => (message.time = new Date(message.time))
            )
          )
        },
      }
    ),
    { name: 'chats' }
  )
)

type TaskStore = {
  tasks: Task[]
  lastChatId: number
  addTask: (
    title: string,
    body: string,
    assigneeEmail: string,
    status: Status
  ) => void
  findTasksForEmployee: (employeeEmail: string) => Task[]
  sortTasksByStatuses: (tasks: Task[]) => { [key: string]: Task[] }
}

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        lastChatId: 0,
        addTask: (title, body, assigneeEmail, status = 'New') => {
          const newTask: Task = {
            id: ++get().lastChatId,
            title,
            body,
            assigneeEmail,
            status,
          }
          set(
            produce((state) => {
              state.tasks.push(newTask)
            })
          )
        },
        findTasksForEmployee: (employeeEmail) =>
          get().tasks.filter((task) => task.assigneeEmail == employeeEmail),
        sortTasksByStatuses: (tasks) => {
          const sortedTasks: { [key: string]: Task[] } = {}
          tasks.forEach((task) => {
            sortedTasks[task.status] = []
            sortedTasks[task.status].push(task)
          })
          return sortedTasks
        },
      }),
      { name: 'tasks' }
    ),
    { name: 'tasks' }
  )
)

//<editor-fold desc="some tests">
// type bearsType = {
//   // bears: number
//   // fishes: number
//   // increasePopulation: () => void
//   // removeAllBears: () => void
//   // addFishes: (count: number) => void
//   plants: { type: { lvl: { type: { name: string }; count: number } } }
//   changePlantNameImmer: () => void
// }
// export const useStore = create(
//   devtools(
//     persist(
//       immer<bearsType>((set) => ({
//         // bears: 0,
//         // fishes: 0,
//         // increasePopulation: () =>
//         //   set((state) => ({ bears: state.bears + 1 }), false, 'inc'),
//         // removeAllBears: () => set({ bears: 0 }),
//         // addFishes: (count) =>
//         //   set((state) => ({ fishes: state.fishes + count }), false, {
//         //     type: 'bear/addFishes',
//         //     count,
//         //   }),
//         plants: { type: { lvl: { type: { name: '' }, count: 1 } } },
//         changePlantNameImmer: () =>
//           set(
//             (state) => {
//               state.plants.type.lvl.type.name = 'asdImmer'
//             },
//             false,
//             // @ts-ignore
//             'change name immer'
//           ),
//       })),
//       {
//         name: 'food-storage', // name of the item in the storage (must be unique)
//       }
//     ),
//     { name: 'bears' }
//   )
// )
//</editor-fold>
