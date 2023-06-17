import hashPassword from './HashPassword'
import User from '../data/User'
import { LS_ITEM_USERS } from '../data/constants'
import { saveToLS } from './LocalStorage'

const generateDummyUsers = async () => {
  const users: User[] = []
  users.push(new User('user', await hashPassword('1234567')))
  users.push(new User('admin', await hashPassword('123qwe')))
  return users
}

const populateLSWithDummyData = async () => {
  const users = await generateDummyUsers()
  saveToLS(LS_ITEM_USERS, users)

  return Promise.resolve()
}

export { populateLSWithDummyData }
