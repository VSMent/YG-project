import { Send } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

import ChatListButton from './ChatListButton'
import ChatMessagesList from './ChatMessagesList'
import { useChatStore } from '@utils/Stores'
import { Button } from '@sh/components/ui/button'
import { Textarea } from '@sh/components/ui/textarea'
import { useToast } from '@sh/components/ui/use-toast'

export default function CommunicationPage() {
  const { chats, findChatById, addChatMessage } = useChatStore()
  const [activeChat, setActiveChat] = useState(chats[0])
  const { toast } = useToast()
  const messageTextarea = useRef<HTMLTextAreaElement>(null)
  const changeActiveChat = (chatId: number) => {
    const newChat = findChatById(chatId)
    if (newChat) {
      setActiveChat(newChat)
    } else {
      toast({
        title: 'Chat was not found',
        variant: 'destructive',
        description: 'Please contact support',
      })
    }
  }
  const addMessageToChat = () => {
    const newMessage = messageTextarea.current?.value
    if (newMessage) {
      addChatMessage(
        activeChat.id,
        activeChat.participants.employee.email,
        newMessage
      )
    } else {
      toast({
        title: 'Message was empty',
        variant: 'destructive',
        description: 'Please contact support',
      })
    }
  }
  const clearInput = () => {
    if (messageTextarea.current) messageTextarea.current.value = ''
  }

  useEffect(() => {
    const unsub = useChatStore.subscribe(() => {
      changeActiveChat(activeChat.id)
    })
    return () => {
      unsub()
    }
  }, [chats])

  return (
    <div className="container grid h-full items-stretch gap-6 p-8 pt-6 md:grid-cols-[200px_1fr]">
      <div
        className={
          'flex min-h-[400px] w-full flex-col items-stretch justify-start rounded-md border ' +
          'space-y-2 bg-muted p-2 text-muted-foreground lg:min-h-[700px] '
        }
      >
        {chats.map((c) => (
          <ChatListButton
            key={c.id}
            renderActive={activeChat.id == c.id}
            onClick={() => changeActiveChat(c.id)}
            name={c.participants.user.name}
            lastMessage={c.messages[c.messages.length - 1].body ?? ''}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 ">
        <ChatMessagesList activeChat={activeChat} />
        <div className="flex flex-row items-center ">
          <Textarea
            className="resize-none"
            placeholder="Напишіть повідомлення тут.."
            ref={messageTextarea}
            onKeyDown={(e) => {
              if (e.key == 'Enter' && !e.shiftKey) {
                addMessageToChat()
                clearInput()
              }
            }}
          />
          <Button
            className="mx-4"
            size="icon"
            variant="outline"
            onClick={() => {
              addMessageToChat()
              clearInput()
            }}
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  )
}
