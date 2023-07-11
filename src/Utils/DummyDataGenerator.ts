import { useEffect } from 'react'
import User from '../data/User'
import Chat from '../data/Chat'
import hashPassword from './HashPassword'
import { useChatStore, useUserStore } from './Stores'

const peopleData = {
  firstnames: [
    'Віктор',
    'Борис',
    'Єлизавета',
    'Федір',
    'Ярослав',
    'Тамара',
    'Андрій',
    'Тарас',
    'Віталій',
    'Володимир',
    'Олена',
    'Ірина',
    'Оксана',
    'Ілля',
    'Лілія',
    'Максим',
  ],
  lastnames: [
    'Ткачук',
    'Шевчук',
    'Кравченко',
    'Василенко',
    'Когут',
    'Стасюк',
    'Василишин',
    'Павленко',
    'Іванов',
    'Олійник',
    'Ковальчук',
    'Лисенко',
    'Баран',
  ],
  usernames: [
    'intega',
    'parin',
    'ystn',
    'vtli',
    'omian',
    'user652',
    'raun',
    'tsent',
    'vgamis',
    'amerdif',
    'planti',
    'espo',
  ],
}
const useDummyUserData = () => {
  const { users, addUser } = useUserStore()

  useEffect(() => {
    const add = async () => {
      if (users.length == 0) {
        addUser({
          login: 'admin@gmail.com',
          pass: await hashPassword('admin'),
          firstname: 'Максим',
          lastname: 'Стасюк',
          role: 'admin',
        })
        addUser({
          login: 'marketing@gmail.com',
          pass: await hashPassword('marketing'),
          firstname: 'Денис',
          lastname: 'Валентинін',
          role: 'employee',
          department: 'marketing',
        })
        addUser({
          login: 'personnel@gmail.com',
          pass: await hashPassword('personnel'),
          firstname: 'Андрій',
          lastname: 'Рубайло',
          role: 'employee',
          department: 'personnel',
        })
        addUser({
          login: 'user@gmail.com',
          pass: await hashPassword('user'),
          firstname: 'Олена',
          lastname: 'Павленко',
          role: 'user',
        })
        for (const username of peopleData.usernames) {
          const common = {
            login: `${username}${
              Math.random() > 0.5 ? '@gmail.com' : '@outlook.com'
            }`,
            pass: await hashPassword(username),
            firstname:
              peopleData.firstnames[
                Math.floor(Math.random() * peopleData.firstnames.length)
              ],
            lastname:
              peopleData.lastnames[
                Math.floor(Math.random() * peopleData.lastnames.length)
              ],
          }
          let user: User
          if (Math.random() > 0.8) {
            user = {
              ...common,
              role: 'employee',
              department: Math.random() > 0.5 ? 'marketing' : 'personnel',
            }
          } else {
            user = {
              ...common,
              role: 'user',
            }
          }

          addUser(user)
        }
      }
    }
    add().catch(console.log)
  })
}
const useDummyChatData = () => {
  const { users, findUserByLogin } = useUserStore()
  const { chats, addChat } = useChatStore()
  const kindOfRealUsers = [...users].splice(2)

  const c = new Chat(
    findUserByLogin('admin@gmail.com')?.firstname ?? 'Менеджер підтримки',
    kindOfRealUsers[
      Math.floor(Math.random() * kindOfRealUsers.length)
    ].firstname
  )
  c.addMessage(
    c.participants[1],
    'Привіт, я маю проблему з моїм акаунтом. Я не можу увійти. Можете допомогти?',
    '2023-06-01 18:18:50'
  )
  c.addMessage(
    c.participants[0],
    "Вітаю! Звучить як проблема, але не хвилюйтеся, ми зможемо вирішити це разом. Спочатку, давайте перевіримо ваші облікові дані. Ви можете надати мені свою електронну адресу та ім'я користувача, будь ласка?",
    '2023-06-01 18:19:35'
  )
  c.addMessage(
    c.participants[1],
    "Звичайно, моя електронна адреса - example@email.com, а ім'я користувача - user123.",
    '2023-06-01 18:20:41'
  )
  c.addMessage(
    c.participants[0],
    'Дякую. Давайте я швидко перевірю ваш акаунт. Зачекайте хвилинку, будь ласка.',
    '2023-06-01 18:21:12'
  )
  c.addMessage(
    c.participants[0],
    'Здається, я знайшов причину вашої проблеми. Ваш акаунт був тимчасово заблокований за неправильні спроби входу. Але не турбуйтеся, я можу розблокувати його прямо зараз. Вам потрібно буде змінити пароль після входу. Ви згодні з цим?',
    '2023-06-01 18:23:06'
  )
  c.addMessage(
    c.participants[1],
    'Так, звичайно. Дуже дякую за допомогу!',
    '2023-06-01 18:23:29'
  )
  c.addMessage(
    c.participants[0],
    'Нема за що! Одразу після того, як ви увійдете, вам буде запропоновано змінити пароль. Я надішлю вам лист з інструкціями та посиланням на зміну пароля. Будь ласка, перевірте вашу пошту.',
    '2023-06-01 18:24:27'
  )
  c.addMessage(
    c.participants[1],
    'Добре, зрозуміло. Ще раз дякую за вашу допомогу!',
    '2023-06-01 18:24:43'
  )
  c.addMessage(
    c.participants[0],
    'Будь ласка! Я радий, що зміг вам допомогти. Якщо у вас є ще питання або проблеми, не соромтеся звертатися. Ми завжди тут, щоб допомогти вам.',
    '2023-06-01 18:25:15'
  )

  const c1 = new Chat(
    findUserByLogin('admin@gmail.com')?.firstname ?? 'Менеджер підтримки',
    kindOfRealUsers[
      Math.floor(Math.random() * kindOfRealUsers.length)
    ].firstname
  )

  c1.addMessage(
    c1.participants[1],
    'Привіт, мені потрібна допомога з моєю замовленням. Я не отримав його вчасно і хочу знати, що відбувається.',
    '2023-06-02 10:25:15'
  )
  c1.addMessage(
    c1.participants[0],
    'Доброго дня! Я дуже вибачаюся за будь-які незручності, які ви можете мати. Будь ласка, надайте мені ваш номер замовлення, щоб я міг перевірити його статус.',
    '2023-06-02 10:27:15'
  )
  c1.addMessage(
    c1.participants[1],
    'Мій номер замовлення - 12345678.',
    '2023-06-02 10:28:31'
  )
  c1.addMessage(
    c1.participants[0],
    'Дякую за надану інформацію. Давайте я швидко перевірю статус вашого замовлення.',
    '2023-06-02 10:29:11'
  )
  c1.addMessage(
    c1.participants[0],
    'Вибачте за затримку. Замовлення 12345678 знаходиться в процесі доставки та повинно бути доставлено завтра. Якщо ви не отримаєте його до завтрашнього дня, будь ласка, повідомте мене, і ми вживемо необхідних заходів.',
    '2023-06-02 10:33:21'
  )
  c1.addMessage(
    c1.participants[1],
    'Добре, дякую за інформацію. Я буду слідкувати за станом доставки.',
    '2023-06-02 10:33:45'
  )
  c1.addMessage(
    c1.participants[0],
    "Ви завжди можете зв'язатися зі мною, якщо у вас виникнуть будь-які питання або проблеми. Ми завжди готові допомогти нашим клієнтам.",
    '2023-06-02 10:34:05'
  )

  const c2 = new Chat(
    findUserByLogin('admin@gmail.com')?.firstname ?? 'Менеджер підтримки',
    kindOfRealUsers[
      Math.floor(Math.random() * kindOfRealUsers.length)
    ].firstname
  )

  c2.addMessage(
    c2.participants[1],
    'Привіт, я не можу знайти відповідь на своє питання в вашій довідці. Чи можете ви мені допомогти з цим?',
    '2023-06-21 13:24:27'
  )

  c2.addMessage(
    c2.participants[0],
    'Звичайно! Я залюбки допоможу вам з вашим питанням. Будь ласка, опишіть, що саме ви шукаєте, і я зроблю все можливе, щоб знайти відповідь.',
    '2023-06-21 13:25:05'
  )

  c2.addMessage(
    c2.participants[1],
    'Мене цікавить, які способи оплати ви приймаєте на вашому сайті?',
    '2023-06-21 13:26:12'
  )

  c2.addMessage(
    c2.participants[0],
    'Ми приймаємо різні способи оплати, включаючи кредитні картки, PayPal і банківські перекази. Якщо ви бажаєте отримати детальну інформацію про доступні способи оплати, я можу надіслати вам посилання на нашу сторінку з інформацією про оплату.',
    '2023-06-21 13:26:58'
  )

  c2.addMessage(
    c2.participants[1],
    'Будь ласка, надішліть мені посилання. Дякую!',
    '2023-06-21 13:27:45'
  )

  c2.addMessage(
    c2.participants[0],
    'Оскільки ми взаємодіємо через чат, я не можу надіслати вам пряме посилання, але я скопіюю його текстом. Ось воно: www.example.com/payment-options. Ви знайдете повну інформацію про доступні способи оплати на цій сторінці.',
    '2023-06-21 13:28:30'
  )

  c2.addMessage(
    c2.participants[1],
    'Дякую вам за вашу допомогу! Це було швидко і зрозуміло.',
    '2023-06-21 13:29:15'
  )

  c2.addMessage(
    c2.participants[0],
    'Нема за що! Радий, що зміг вам допомогти. Якщо у вас є ще питання, будь ласка, не соромтеся звертатися до нас. Ми завжди готові надати вам підтримку.',
    '2023-06-21 13:30:02'
  )

  useEffect(() => {
    const add = async () => {
      if (chats.length == 0) {
        addChat(c)
        addChat(c1)
        addChat(c2)
      }
    }
    add().catch(console.log)
  })
}

export { useDummyUserData, useDummyChatData }
