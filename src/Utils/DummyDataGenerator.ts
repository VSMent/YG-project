import { useEffect } from 'react'
import { User, Role, Department } from '../data/User'
import { Chat, Message } from '../data/Chat'
import chatsData from '../data/chats.json'
import peopleData from '../data/people.json'
import hashPassword from './HashPassword'
import { useChatStore, useUserStore } from './Stores'

const useDummyUserData = () => {
  const { users, addUserObj } = useUserStore()
  const generatedUsers: User[] = []

  console.log('dummy users', generatedUsers)

  useEffect(() => {
    const add = async () => {
      if (users.length == 0) {
        await Promise.all([
          ...peopleData.predefined.map(async (userData) => {
            const common = {
              login: userData.login,
              pass: await hashPassword(userData.pass),
              firstname: userData.firstname,
              lastname: userData.lastname,
            }

            if (userData.role == 'admin' || userData.role == 'user')
              generatedUsers.push({
                ...common,
                role: userData.role,
              })
            else if (userData.role == 'employee')
              generatedUsers.push({
                ...common,
                role: userData.role,
                department: <Department>userData.department,
              })
          }),

          ...peopleData.usernames.map(async (username) => {
            const common = {
              login: `${username}@${
                Math.random() > 0.5 ? 'gmail.com' : 'outlook.com'
              }`,
              pass: await hashPassword(username),
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
                department: Math.random() > 0.5 ? 'marketing' : 'personnel',
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
    }
    add().catch(console.log)
  })
}
const useDummyChatData = () => {
  const { users } = useUserStore()
  const { chats, addChat } = useChatStore()
  const kindOfRealUsers = users.filter((u) => u.role == 'user')
  const kindOfRealEmployees = users.filter((u) => u.role == 'employee')

  const generatedChats: Chat[] = []
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
        employee: { email: employee.login, name: employee.firstname },
        user: { email: user.login, name: user.firstname },
      },
      messages: [],
    }
    chatDatum.forEach((messageDatum) => {
      c.messages.push({
        authorEmail: messageDatum[0] == 'e' ? employee.login : user.login,
        body: messageDatum[1],
        time: new Date(messageDatum[2]),
      })
    })
    generatedChats.push(c)
  })

  useEffect(() => {
    const add = async () => {
      if (chats.length == 0) {
        generatedChats.forEach((c) => addChat(c))
      }
    }
    add().catch(console.log)
  })
}

export { useDummyUserData, useDummyChatData }
