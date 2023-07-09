/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { produce, setAutoFreeze } from 'immer'
import User from '../data/User'
import Chat, { Message } from '../data/Chat'

// setAutoFreeze(false)
type UserStore = {
  users: User[]
  currentUser: User | null
  str: string
  wipeUsers: () => void
  addUser: (user: User) => void
  findUserByLogin: (login: string) => User | null
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
        addUser: (user) => {
          set(
            produce((state) => {
              state.users.push(user)
            }),
            false,
            `addUser ${user.login}`
          )
        },
        findUserByLogin: (login) =>
          get().users.filter((user) => user.login === login)[0] ?? null,
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
  addChat: (chat: Chat) => void
  addChatMessage: (chatId: number, author: string, message: string) => void
  wipeChats: () => void
  findChatById: (chatId: number) => Chat | null
}
export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (set, get) => ({
        chats: [],
        wipeChats: () => set({ chats: [] }, false, 'wipeChats'),
        addChat: (chat) => {
          set(
            produce((state) => {
              state.chats.push(chat)
            }),
            false,
            `addChat ${chat.id}`
          )
        },
        addChatMessage: (chatId, author, message) => {
          const chatIndex = get().chats.findIndex((ch) => ch.id == chatId)
          if (chatIndex < 0) return
          set(
            produce((state) => {
              state.chats[chatIndex].messages.push(new Message(author, message))
            }),
            true,
            `add message to chat ${chatId}`
          )
        },
        findChatById: (chatId) =>
          get().chats.filter((chat) => chat.id == chatId)[0] ?? null,
      }),
      { name: 'chats' }
    ),
    { name: 'chats' }
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
