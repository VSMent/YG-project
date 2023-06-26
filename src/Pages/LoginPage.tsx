import { useNavigate } from 'react-router'
import React, { useEffect } from 'react'
import LoginForm from '../Components/LoginForm'
import hashPassword from '../Utils/HashPassword'
import User from '../data/User'
import { useToast } from '../shadcn-ui/components/ui/use-toast'
import { Toaster } from '../shadcn-ui/components/ui/toaster'
import { useUserStore } from '../Utils/Stores'

const LoginPage = () => {
  const { addUser, findUserByLogin, logInUser, currentUser } = useUserStore()
  const navigate = useNavigate()
  const { toast } = useToast()
  const loginHandler = async (login: string, pass: string) => {
    const hashedPass = await hashPassword(pass)
    const user = findUserByLogin(login)
    if (user && user.pass == hashedPass) {
      logInUser(user)
      toast({
        title: 'Logged in successfully',
        description: `Hello, ${user.login}`,
      })
    } else {
      toast({
        title: 'Credentials error',
        description: 'Login or password is wrong',
        variant: 'destructive',
      })
    }
  }
  const registerHandler = async (login: string, pass: string) => {
    const user = findUserByLogin(login)
    if (!user) {
      const hashedPass = await hashPassword(pass)
      const newUser = new User(login, hashedPass)
      addUser(newUser)
      toast({
        title: 'Registered successfully',
        description: 'Proceed to login',
      })
    } else {
      toast({
        title: 'User exists',
        description: 'Please use login instead',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <LoginForm
        loginHandler={loginHandler}
        registerHandler={registerHandler}
      />

      <Toaster />
    </>
  )
}

export default LoginPage
