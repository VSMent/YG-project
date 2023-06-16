import LoginForm from '../Components/LoginForm'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import hashPassword from '../Utils/HashPassword'
import User from '../data/User'
import { loadFromLS, saveToLS } from '../Utils/LocalStorage'
import { LS_ITEM_USERS } from '../data/constants'
import { useToast } from '../Components/shadcn-ui/components/Toast/use-toast'

const correctPass = (user: User, pass: string) => user.pass === pass
const LoginPage = () => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [users, setUsers] = useState(loadFromLS(LS_ITEM_USERS) ?? [])
  const findUser = (login: string) => {
    const foundUser = users.filter((u: User) => u.login === login)
    return foundUser.length === 1 ? foundUser[0] : null
  }
  const loginHandler = async (login: string, pass: string) => {
    console.log(login, pass)
    const hashedPass = await hashPassword(pass)
    const user = findUser(login)
    if (user && correctPass(user, hashedPass)) {
      console.log(`logged in\nhello${login}`)
      navigate('/')
    } else {
      console.error('wrong pass')
      toast({
        title: "Please try again",
        description: "Wrong login or password combination.",
        variant: "destructive",
      })
    }
  }
  const registerHandler = async (login: string, pass: string) => {
    const user = findUser(login)
    if (!user) {
      const hashedPass = await hashPassword(pass)
      const newUser = new User(login, hashedPass)
      const newUsers = [...users, newUser]
      console.log(users, newUsers)
      setUsers([...newUsers])
      saveToLS(LS_ITEM_USERS, newUsers)
      console.log(`registered)`)
    } else {
      console.log(`user exists\n login please`)
    }
  }

  return <>
    <LoginForm loginHandler={loginHandler}
               registerHandler={registerHandler}/>
  </>
}

export default LoginPage