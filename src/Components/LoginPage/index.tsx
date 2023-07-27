import { useNavigate } from 'react-router'
import React, { useEffect } from 'react'
import LoginForm from './LoginForm'
import { useUserStore } from '@hooks/Stores'
import { HashPassword } from '@utils'
import { useToast } from '@sh/components/ui/use-toast'
import { Toaster } from '@sh/components/ui/toaster'

const LoginPage = () => {
  const { registerUser, findUserByEmail, logInUser, currentUser } =
    useUserStore()
  const navigate = useNavigate()
  const { toast } = useToast()
  const loginHandler = async (email: string, pass: string) => {
    const hashedPass = await HashPassword(pass)
    const user = findUserByEmail(email)
    if (user && user.pass == hashedPass) {
      logInUser(user)
      toast({
        title: 'Logged in successfully',
        description: `Hello, ${user.email}`,
      })
    } else {
      toast({
        title: 'Credentials error',
        description: 'Email or password is wrong',
        variant: 'destructive',
      })
    }
  }
  const registerHandler = async (
    email: string,
    pass: string,
    firstname: string,
    lastname: string
  ) => {
    const user = findUserByEmail(email)
    if (!user) {
      const hashedPass = await HashPassword(pass)
      registerUser(email, hashedPass, firstname, lastname)
      toast({
        title: 'Registered successfully',
        description: 'Proceed to log in',
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
    <div className="container flex h-screen w-1/2 flex-col justify-center gap-4">
      <LoginForm
        loginHandler={loginHandler}
        registerHandler={registerHandler}
      />

      <Toaster />
    </div>
  )
}

export default LoginPage
