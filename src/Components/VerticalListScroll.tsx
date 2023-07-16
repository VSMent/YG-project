import { ReactNode } from 'react'
import { ScrollArea } from './ScrollArea'
import { cn } from '@sh/lib/utils'

type VerticalListScrollProps = {
  className?: string
  children?: ReactNode
}
const VerticalListScroll = ({
  className,
  children,
}: VerticalListScrollProps) => {
  return (
    <ScrollArea
      className={cn(
        'flex-[1_0_1px] rounded-md border bg-muted p-4 text-base',
        // fix radix viewport display
        '[&>[data-radix-scroll-area-viewport]>div]:!flex',
        '[&>[data-radix-scroll-area-viewport]>div]:flex-col',
        '[&>[data-radix-scroll-area-viewport]>div]:gap-3',
        className
      )}
    >
      {children}
    </ScrollArea>
  )
}

export default VerticalListScroll
