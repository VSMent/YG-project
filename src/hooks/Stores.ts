/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { produce, setAutoFreeze } from 'immer'
import { Department, User } from '@type/User'
import { Chat, Message } from '@type/Chat'
import { Task, Status, PossibleStatuses } from '@type/Task'
import {
  RecruitingEvent,
  RecruitingStatus,
  PossibleStatuses as PossibleRecruitingStatuses,
} from '@type/RecrutingEvent'
import { Equipment, EquipmentStatus } from '@type/Equipment'
import { Sale } from '@type/Sale'

// setAutoFreeze(false)
type UserStore = {
  users: User[]
  currentUser: User | null
  wipeUsers: () => void
  addUserObj: (user: User) => void
  registerUser: (
    email: string,
    pass: string,
    firstname: string,
    lastname: string
  ) => void
  findUserByEmail: (email: string) => User | null
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
        wipeUsers: () => set({ users: [] }, false, 'wipeUsers'),
        addUserObj: (user) => {
          set(
            produce((state) => {
              state.users.push(user)
            }),
            false,
            `addUser as Object ${user.email}`
          )
        },
        registerUser: (email, pass, firstname, lastname) => {
          const user: User = {
            email,
            pass,
            firstname,
            lastname,
            role: 'user',
          }
          set(
            produce((state) => {
              state.users.push(user)
            }),
            false,
            `registerUser ${user.email}`
          )
        },
        findUserByEmail: (email) =>
          get().users.filter((user) => user.email === email)[0] ?? null,
        findUsersByDepartment: (department) =>
          get().users.filter(
            (user) => user.role == 'employee' && user.department == department
          ),
        logInUser: (user) => {
          set(() => ({ currentUser: user }), false, `logInUser ${user.email}`)
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
  activeSelection: {
    [key: string]: { email: string; status: Status }
  }
  addTask: (
    title: string,
    body: string,
    assigneeEmail: string,
    status: Status
  ) => void
  findTasksForEmployee: (employeeEmail: string) => Task[]
  sortTasksByStatuses: (tasks: Task[]) => { [key: string]: Task[] }
  setActiveTaskSelection: (
    department: Department,
    email: string,
    status: Status
  ) => void
}

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        lastChatId: 0,
        activeSelection: {},
        addTask: (title, body, assigneeEmail, status = PossibleStatuses[0]) => {
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
            }),
            false,
            `add task ${title}`
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
        setActiveTaskSelection: (department, email, status) => {
          set(
            produce((state) => {
              state.activeSelection[department] = { email, status }
            }),
            false,
            `set active task to ${department}, ${email}, ${status}`
          )
        },
      }),
      { name: 'tasks' }
    ),
    { name: 'tasks' }
  )
)

type RecruitingEventStore = {
  events: RecruitingEvent[]
  lastEventId: number
  activeEventsSelection: RecruitingEvent[]
  addEvent: (
    title: string,
    description: string,
    status: RecruitingStatus
  ) => void
  findEventsByStatus: (status: RecruitingStatus) => RecruitingEvent[]
  setActiveEventsSelection: (status: RecruitingStatus) => void
}

export const useRecruitingEventStore = create<RecruitingEventStore>()(
  devtools(
    persist(
      (set, get) => ({
        events: [],
        lastEventId: 0,
        activeEventsSelection: [],
        addEvent: (
          title,
          description,
          status = PossibleRecruitingStatuses[0]
        ) => {
          const newEvent: RecruitingEvent = {
            id: ++get().lastEventId,
            title,
            description,
            status,
          }
          set(
            produce((state) => {
              state.events.push(newEvent)
            }),
            false,
            `add event ${title}`
          )
        },
        findEventsByStatus: (status) =>
          get().events.filter((event) => event.status === status),
        setActiveEventsSelection: (status) => {
          const activeEvents = get().events.filter(
            (event) => event.status === status
          )
          set(
            produce((state) => {
              state.activeEventsSelection = activeEvents
            }),
            false,
            `set active recruiting events to ${status} (${activeEvents.length})`
          )
        },
      }),
      { name: 'recruiting-events' }
    ),
    { name: 'recruiting-events' }
  )
)

type EquipmentStore = {
  equipment: Equipment[]
  lastEquipmentId: number
  addEquipment: (
    name: string,
    description: string,
    status: EquipmentStatus
  ) => void
}

export const useEquipmentStore = create<EquipmentStore>()(
  devtools(
    persist(
      (set, get) => ({
        equipment: [],
        lastEquipmentId: 0,
        addEquipment: (name, description, status) => {
          const newEquipment: Equipment = {
            id: ++get().lastEquipmentId,
            name,
            description,
            status,
          }
          set(
            produce((state) => {
              state.equipment.push(newEquipment)
            }),
            false,
            `add equipment ${name}`
          )
        },
      }),
      { name: 'equipment' }
    ),
    { name: 'equipment' }
  )
)

type SaleStore = {
  sales: Sale[]
  lastSaleId: number
  addSale: (
    product: string,
    quantity: number,
    price: number,
    customer: string,
    salesperson: string,
    date?: Date
  ) => void
  findSalesByCustomerEmail: (email: string) => Sale[]
}

export const useSaleStore = create<SaleStore>()(
  devtools(
    persist(
      (set, get) => ({
        sales: [],
        lastSaleId: 0,
        addSale: (product, quantity, price, customer, salesperson, date) => {
          const newSale: Sale = {
            id: ++get().lastSaleId,
            product,
            quantity,
            price,
            customer,
            salesperson,
            date: date ?? new Date(),
          }
          set(
            produce((state) => {
              state.sales.push(newSale)
            }),
            false,
            `add ${product} sale`
          )
        },
        findSalesByCustomerEmail: (email) => {
          return get().sales.filter((sale) => sale.customer === email)
        },
      }),
      {
        name: 'sales',
        onRehydrateStorage: () => (state) => {
          state?.sales.forEach((sale) => (sale.date = new Date(sale.date)))
        },
      }
    ),
    { name: 'sales' }
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
