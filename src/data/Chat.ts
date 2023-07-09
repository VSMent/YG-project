class Message {
  time: string
  author: string
  body: string

  constructor(_author: string, _body: string, _time: string | null = null) {
    this.author = _author
    this.body = _body
    this.time = _time
      ? _time
      : new Date().toISOString().replace('T', ' ').split('.')[0]
  }
}

class Chat {
  id: number
  participants: string[]
  messages: Message[]
  static lastId = 0

  constructor(
    participant1: string,
    participant2: string,
    _messages: Message[] = []
  ) {
    this.id = Chat.lastId + 1
    this.participants = [participant1, participant2]
    this.messages = _messages
    Chat.lastId = this.id
  }

  addMessage = (author: string, body: string, time: string | null = null) => {
    this.messages.push(new Message(author, body, time))
  }
}

export default Chat
export { Message }
