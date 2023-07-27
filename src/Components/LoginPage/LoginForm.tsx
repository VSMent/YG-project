import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@sh/components/ui/form'
import { Button } from '@sh/components/ui/button'
import { Input } from '@sh/components/ui/input'

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'У імені має бути 2 чи більше символів' })
    .max(15, { message: "Ім'я задовге" }),
  lastName: z
    .string()
    .min(2, { message: 'У прізвищі має бути 2 чи більше символів' })
    .max(15, { message: 'Прізвище задовге' }),
  email: z
    .string()
    .email({ message: 'Тут має бути вказаний емейл' })
    .min(7, { message: 'В емейлі має бути 7 чи більше символів' })
    .max(50, { message: 'Емейл задовгий' }),
  pass: z
    .string()
    .min(8, { message: 'У паролі має бути 8 чи більше символів' })
    .max(50, { message: 'Пароль задовгий' }),
})

const LoginForm = ({ loginHandler, registerHandler }: LoginFormProps) => {
  const [isLogin, setIsLogin] = useState(true)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: '', lastName: '', email: '', pass: '' },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values, isLogin)
  }
  return (
    <Form {...form}>
      <div className={'text-center text-2xl'}>
        {isLogin ? 'Вхід' : 'Реєстрація'}
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-md border p-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Емейл</FormLabel>
              <FormControl>
                <Input placeholder="user@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="Strong_pa55w0rd" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isLogin && (
          <>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ім'я</FormLabel>
                  <FormControl>
                    <Input placeholder="Іван" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Прізвище</FormLabel>
                  <FormControl>
                    <Input placeholder="Іванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <div className="flex justify-end gap-4">
          <Button
            variant={'outline'}
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'У мене ще немає акаунту' : 'У мене вже є акаунт'}
          </Button>
          <Button type="submit">
            {isLogin ? 'Увійти' : 'Зареєструватися'}
          </Button>
        </div>
      </form>
    </Form>
  )
  // const loginInput = useRef<HTMLInputElement>(null)
  // const passInput = useRef<HTMLInputElement>(null)
  //
  // return (
  //   <>
  //     <div className={styles.Login}>
  //       <h1>Login</h1>
  //       <label htmlFor="login">Login:</label>
  //       <input id="login" type="text" name="login" ref={loginInput} />
  //       <label htmlFor="pass">Password:</label>
  //       <input id="pass" type="password" name="pass" ref={passInput} />
  //       <button
  //         type="button"
  //         onClick={() => {
  //           loginHandler(
  //             loginInput.current?.value ?? '',
  //             passInput.current?.value ?? ''
  //           ).catch(console.error)
  //         }}
  //       >
  //         Login
  //       </button>
  //       <button
  //         className={'bg-amber-800'}
  //         type="button"
  //         onClick={() => {
  //           registerHandler(
  //             loginInput.current?.value ?? '',
  //             passInput.current?.value ?? ''
  //           ).catch(console.error)
  //         }}
  //       >
  //         Register
  //       </button>
  //     </div>
  //   </>
  // )
}

type LoginFormProps = {
  loginHandler: (login: string, pass: string) => Promise<void>
  registerHandler: (login: string, pass: string) => Promise<void>
}
export default LoginForm
