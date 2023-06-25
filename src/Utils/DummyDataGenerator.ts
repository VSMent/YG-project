import { useEffect } from 'react'
import User from '../data/User'
import hashPassword from './HashPassword'
import { useUserStore } from './Stores'

const useDummyUserData = () => {
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
