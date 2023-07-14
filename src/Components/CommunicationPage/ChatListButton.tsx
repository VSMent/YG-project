type ChatListButtonProps = {
  className?: string
  renderActive?: boolean
  name: string
  lastMessage: string
  onClick: () => void
}
const ChatListButton = ({
  className,
  renderActive = false,
  name,
  lastMessage,
  onClick,
}: ChatListButtonProps) => (
  <div
    className={
      'inline-flex cursor-pointer select-none flex-col items-start justify-center rounded-md px-3 py-1 text-sm font-medium ' +
      'font-medium shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring ' +
      (renderActive
        ? 'bg-white text-primary'
        : 'text-muted-foreground hover:bg-primary-foreground/90') +
      ' ' +
      className
    }
    onClick={onClick}
  >
    <h4>{name}</h4>
    <p className="text-sm text-primary/25">
      {lastMessage.substring(0, 18) + '...'}
    </p>
  </div>
)
export default ChatListButton
