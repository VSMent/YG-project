import { useEffect } from 'react'
import User from '../data/User'
import hashPassword from './HashPassword'
import { useUserStore } from './Stores'

const peopleData = {
  firstnames: [
    'Віктор',
    'Борис',
    'Єлизавета',
    'Федір',
    'Ярослав',
    'Тамара',
    'Андрій',
    'Тарас',
    'Віталій',
    'Володимир',
    'Олена',
    'Ірина',
    'Оксана',
    'Ілля',
    'Лілія',
    'Максим',
  ],
  lastnames: [
    'Ткачук',
    'Шевчук',
    'Кравченко',
    'Василенко',
    'Когут',
    'Стасюк',
    'Василишин',
    'Павленко',
    'Іванов',
    'Олійник',
    'Ковальчук',
    'Лисенко',
    'Баран',
  ],
  usernames: ['intega', 'parin', 'ystn', 'vtli', 'omian'],
}
const useDummyUserData = () => {
  const { users, addUser } = useUserStore()

  useEffect(() => {
    const add = async () => {
      if (users.length == 0) {
        addUser(
          new User(
            'admin@gmail.com',
            await hashPassword('admin'),
            'Максим',
            'Стасюк',
            'admin'
          )
        )
        addUser(
          new User(
            'user@gmail.com',
            await hashPassword('user'),
            'Олена',
            'Павленко'
          )
        )
        for (const username of peopleData.usernames) {
          addUser(
            new User(
              `${username}${
                Math.random() > 0.5 ? '@gmail.com' : '@outlook.com'
              }`,
              await hashPassword(username),
              peopleData.firstnames[
                Math.floor(Math.random() * peopleData.firstnames.length)
              ],
              peopleData.lastnames[
                Math.floor(Math.random() * peopleData.lastnames.length)
              ]
            )
          )
        }
      }
    }
    add().catch(console.log)
  })
}
const useDummyChatData = () => {
  const { users, addUser } = useUserStore()

  useEffect(() => {
    const add = async () => {
      if (users.length == 0) {
        addUser(new User('user', await hashPassword('1234567')))
        addUser(new User('admin', await hashPassword('123qwe'), 'admin'))
      }
    }
    add().catch(console.log)
  })
}

export { useDummyUserData }
