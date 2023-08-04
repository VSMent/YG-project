import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import { Card, CardHeader, CardTitle } from '@sh/components/ui/card'
import { cn } from '@sh/lib/utils'

const TitleCard = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => {
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
    </Card>
  )
}
const SelfManagementPage = () => {
  return (
    <>
      <div className="container h-full p-8 pt-6">
        <Accordion
          type="single"
          collapsible={true}
          defaultValue="recruting"
          className={'flex h-full flex-col gap-3'}
        >
          <AccordionItem value="recruting" className={'flex flex-col '}>
            <AccordionTrigger>Робота</AccordionTrigger>
            <AccordionContent
              className={
                'flex flex-[1_0_1px] flex-row flex-wrap content-around justify-evenly gap-4 '
              }
            >
              <TitleCard title="Відгуки про працівників" />
              <TitleCard title="Мої задачі" />
              <TitleCard title="КРІ" />
              <TitleCard title="Календар" />
              <TitleCard title="Заплановані зустрічі" />
              <TitleCard title="Нарахована ЗП" />

              <TitleCard title="Пульс роботи" className="aspect-square w-64" />
              <TitleCard title="Пульс життя" className="aspect-square w-64" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="personnel" className={'flex flex-col '}>
            <AccordionTrigger>Особисте життя</AccordionTrigger>
            <AccordionContent
              className={
                'flex flex-[1_0_1px] flex-row flex-wrap content-around justify-evenly gap-4 '
              }
            >
              <TitleCard title="Мої фінанси" />
              <TitleCard title="Саморозвиток" />
              <TitleCard title="Здоров'я" />
              <TitleCard title="Особистий планувальник" />
              <TitleCard title="Особистий календар" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default SelfManagementPage
