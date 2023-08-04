import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'
import { cn } from '@sh/lib/utils'

type TitleCardProps = {
  title: string
  className?: string
  content?: string
}

const TitleCard = ({ title, className, content }: TitleCardProps) => {
  return (
    <Card
      className={cn(
        'flex cursor-pointer select-none flex-col text-center',
        'hover:bg-muted-foreground/40 active:bg-muted-foreground/20',
        className
      )}
    >
      <CardHeader className={'m-auto text-2xl'}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {content && (
        <CardContent className="m-auto text-2xl font-bold">
          {content}
        </CardContent>
      )}
    </Card>
  )
}
export default TitleCard
