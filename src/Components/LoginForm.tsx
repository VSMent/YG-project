import { useRef } from 'react'
import styles from '../styles/Login.module.sass'

const LoginForm = ({ loginHandler, registerHandler }: LoginFormProps) => {
  const loginInput = useRef<HTMLInputElement>(null)
  const passInput = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className={styles.Login}>
        <h1>Login</h1>
        <label htmlFor="login">Login:</label>
        <input id="login" type="text" name="login" ref={loginInput} />
        <label htmlFor="pass">Password:</label>
        <input id="pass" type="password" name="pass" ref={passInput} />
        <button
          type="button"
          onClick={() => {
            loginHandler(
              loginInput.current?.value ?? '',
              passInput.current?.value ?? ''
            ).catch(console.error)
          }}
        >
          Login
        </button>
        <button
          className={'bg-amber-800'}
          type="button"
          onClick={() => {
            registerHandler(
              loginInput.current?.value ?? '',
              passInput.current?.value ?? ''
            ).catch(console.error)
          }}
        >
          Register
        </button>
      </div>
    </>
  )
}

type LoginFormProps = {
  loginHandler: (login: string, pass: string) => Promise<void>
  registerHandler: (login: string, pass: string) => Promise<void>
}
export default LoginForm
