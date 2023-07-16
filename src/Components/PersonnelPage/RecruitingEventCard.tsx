import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'
import { RecruitingEvent } from '@type/RecrutingEvent'
import { cn } from '@sh/lib/utils'

type RecruitingEventCardProps = {
  title: string
  events: RecruitingEvent[]
  onClick: () => void
  renderActive?: boolean
}

const RecruitingEventCard = ({
  title,
  events,
  onClick,
  renderActive = false,
}: RecruitingEventCardProps) => {
  const count = events.length ?? 0

  return (
    <Card
      className={cn(
        'flex aspect-square h-full w-48 cursor-pointer select-none flex-col  text-center',
        'hover:bg-muted-foreground/40 active:bg-muted-foreground/20',
        renderActive && 'bg-muted'
      )}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="m-auto text-2xl">{count}</CardContent>
    </Card>
  )
}

export default RecruitingEventCard
