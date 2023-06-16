import styles from '../styles/Login.module.sass'
import { useRef, useState } from 'react'
import { loadFromLS, saveToLS } from '../Utils/LocalStorage'
import hashPassword from '../Utils/HashPassword'
import { LS_ITEM_USERS } from '../data/constants'
import User from '../data/User'

const correctPass = (user: User, pass: string) => user.pass === pass

const LoginForm = () => {
  const [users, setUsers] = useState(loadFromLS(LS_ITEM_USERS) ?? [])

  const loginInput = useRef<HTMLInputElement>(null)
  const passInput = useRef<HTMLInputElement>(null)

  const findUser = (login: string) => {
    const foundUser = users.filter((u: User) => u.login === login)
    return foundUser.length === 1 ? foundUser[0] : null
  }

  const handleLogin = async (login: string, pass: string) => {
    console.log(login, pass)
    const hashedPass = await hashPassword(pass)
    const user = findUser(login)
    if (user && correctPass(user, hashedPass)) {
      console.log(`logged in\nhello${login}`)
    } else {
      console.error('wrong pass')
    }
  }
  const handleRegister = async (login: string, pass: string) => {
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
    <div className={styles.Login}>
      <h1>Login</h1>
      <label htmlFor="login">Login:</label>
      <input id="login" type="text" name="login" ref={loginInput}/>
      <label htmlFor="pass">Password:</label>
      <input id="pass" type="password" name="pass" ref={passInput}/>
      <button type="button"
              onClick={() => {
                handleLogin(loginInput.current?.value ?? '', passInput.current?.value ?? '').catch(console.error)
              }}>Login
      </button>
      <button type="button"
              onClick={() => {
                handleRegister(loginInput.current?.value ?? '', passInput.current?.value ?? '').catch(console.error)
              }}>Register
      </button>
    </div>
  </>
}

export default LoginForm