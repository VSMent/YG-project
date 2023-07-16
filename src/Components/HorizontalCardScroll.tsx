import React, { ReactNode } from 'react'
import { ScrollArea } from './ScrollArea'
import { cn } from '@sh/lib/utils'

type HorizontalScrollProps = {
  className?: string
  children?: ReactNode
}
const HorizontalCardScroll = ({
  className,
  children,
}: HorizontalScrollProps) => {
  return (
    <ScrollArea
      orientation="horizontal"
      className={cn(
        'min-h-[200px] rounded-md border p-4 text-base  ',
        // fix radix viewport display
        '[&>[data-radix-scroll-area-viewport]>div]:!flex ',
        '[&>[data-radix-scroll-area-viewport]>div]:gap-3 ',
        className
      )}
    >
      {children}
    </ScrollArea>
  )
}
export default HorizontalCardScroll
