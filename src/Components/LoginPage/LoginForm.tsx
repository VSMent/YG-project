import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
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

type LoginFormProps = {
  loginHandler: (email: string, pass: string) => Promise<void>
  registerHandler: (
    email: string,
    pass: string,
    firstname: string,
    lastname: string
  ) => Promise<void>
}

const formSchema = z.intersection(
  z.object({
    email: z
      .string()
      .email({ message: 'Тут має бути вказаний емейл' })
      .min(7, { message: 'В емейлі має бути 7 чи більше символів' })
      .max(50, { message: 'Емейл задовгий' }),
    pass: z
      .string()
      .min(8, { message: 'У паролі має бути 8 чи більше символів' })
      .max(50, { message: 'Пароль задовгий' }),
  }),
  z.discriminatedUnion('isLogin', [
    z.object({
      isLogin: z.literal(false),
      firstname: z
        .string()
        .min(2, { message: 'У імені має бути 2 чи більше символів' })
        .max(15, { message: "Ім'я задовге" }),
      lastname: z
        .string()
        .min(2, { message: 'У прізвищі має бути 2 чи більше символів' })
        .max(15, { message: 'Прізвище задовге' }),
    }),
    z.object({
      isLogin: z.literal(true),
    }),
  ])
)

const LoginForm = ({ loginHandler, registerHandler }: LoginFormProps) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      pass: '',
      isLogin: isLogin,
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.isLogin)
      loginHandler(values.email, values.pass).catch(console.error)
    else
      registerHandler(
        values.email,
        values.pass,
        values.firstname,
        values.lastname
      ).catch(console.error)
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
            <FormItem className={'relative'}>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <>
                  <Input
                    placeholder="Strong_pa55w0rd"
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    className={'pr-16'}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                    className="absolute bottom-0 right-0"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isLogin && (
          <>
            <FormField
              control={form.control}
              name="firstname"
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
              name="lastname"
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
            onClick={() => {
              setIsLogin(!isLogin)
              form.setValue('isLogin', !isLogin)
            }}
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
}

export default LoginForm
