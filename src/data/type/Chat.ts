type Message = {
  time: Date
  authorEmail: string
  body: string
}
type Participants = {
  employee: { email: string; name: string }
  user: { email: string; name: string }
}
type Chat = {
  id: number
  participants: Participants
  messages: Message[]
}

export type { Chat, Message, Participants }
