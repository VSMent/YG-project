import { useNavigate } from 'react-router'
import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import { useUserStore } from '@hooks/Stores'
import hashPassword from '@utils/HashPassword'
import { useToast } from '@sh/components/ui/use-toast'
import { Toaster } from '@sh/components/ui/toaster'

const LoginPage = () => {
  const { registerUser, findUserByLogin, logInUser, currentUser } =
    useUserStore()
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
      registerUser(login, hashedPass)
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
