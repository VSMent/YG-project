import { forwardRef } from 'react'

type MessageProps = {
  author: string
  text: string
  time: string
  className: string
}
const ChatMessage = forwardRef<HTMLDivElement, MessageProps>(
  ({ author, text, time, className }: MessageProps, ref) => (
    <div
      className={
        'relative min-w-[20%] max-w-[47%] rounded-md border bg-white p-4' +
        ' ' +
        className
      }
      ref={ref}
    >
      <span className="absolute -top-2.5 left-3 bg-white px-2 text-right text-sm font-light text-muted-foreground">
        {author}
      </span>
      <p>{text}</p>
      <span className="absolute -bottom-2.5 right-3 bg-white px-2 text-right text-sm font-light text-muted-foreground">
        {time}
      </span>
    </div>
  )
)

export default ChatMessage
