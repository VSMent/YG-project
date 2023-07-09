import { useEffect, useRef } from 'react'
import { ScrollArea } from '../shadcn-ui/components/ui/scroll-area'
import Chat from '../data/Chat'
import ChatMessage from './ChatMessage'

const ChatMessagesList = ({ activeChat }: { activeChat: Chat }) => {
  const lastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    lastRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [activeChat])

  const chatMessages = activeChat.messages.map((m, i, arr) => (
    <ChatMessage
      key={`${activeChat.id} ${m.time}`}
      className={
        m.author == activeChat.participants[0] ? 'self-end' : 'self-start'
      }
      author={m.author}
      text={m.body}
      time={m.time}
      ref={i == arr.length - 1 ? lastRef : null}
    />
  ))

  return (
    <ScrollArea
      // type={'always'}
      className={
        'flex-[1_0_1px] rounded-md border text-base ' +
        // fix radix viewport display
        '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
        '[&>[data-radix-scroll-area-viewport]>div]:flex-col ' +
        '[&>[data-radix-scroll-area-viewport]>div]:gap-3 ' +
        '[&>[data-radix-scroll-area-viewport]>div]:p-4 '
      }
    >
      {!chatMessages ? 'Loading' : chatMessages}
    </ScrollArea>
  )
}

export default ChatMessagesList
