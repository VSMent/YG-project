import LoginForm from '../Components/LoginForm'
import React from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const navigate = useNavigate()
  return <>
    <LoginForm/>
    <button type='button' onClick={()=>navigate('/')}>Auth</button>
  </>
}

export default LoginPage