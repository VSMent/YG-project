import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import HorizontalCardScroll from '../HorizontalCardScroll'
import VerticalListScroll from '../VerticalListScroll'
import RecruitingEventCard from './RecruitingEventCard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'
import { useRecruitingEventStore } from '@hooks/Stores'
import { RecruitingStatus } from '@type/RecrutingEvent'
import { cn } from '@sh/lib/utils'

const PersonnelPage = () => {
  const {
    findEventsByStatus,
    activeEventsSelection,
    setActiveEventsSelection,
  } = useRecruitingEventStore()

  const isActiveStatus = (status: RecruitingStatus) =>
    activeEventsSelection.every((event) => event.status == status)

  const open = findEventsByStatus('OpenPosition')
  const interview = findEventsByStatus('Interview')
  const closed = findEventsByStatus('ClosedPosition')

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
            <AccordionTrigger>Рекрутинг</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <HorizontalCardScroll
                className={
                  'border-0 [&>[data-radix-scroll-area-viewport]>div]:justify-evenly'
                }
              >
                <RecruitingEventCard
                  title={'Відкриті вакансії'}
                  events={open}
                  onClick={() => {
                    setActiveEventsSelection('OpenPosition')
                  }}
                  renderActive={isActiveStatus('OpenPosition')}
                />

                <RecruitingEventCard
                  title={'Співбесіди'}
                  events={interview}
                  onClick={() => {
                    setActiveEventsSelection('Interview')
                  }}
                  renderActive={isActiveStatus('Interview')}
                />

                <RecruitingEventCard
                  title={'Закриті вакансії'}
                  events={closed}
                  onClick={() => {
                    setActiveEventsSelection('ClosedPosition')
                  }}
                  renderActive={isActiveStatus('ClosedPosition')}
                />
              </HorizontalCardScroll>

              <VerticalListScroll>
                {activeEventsSelection.map((event) => (
                  <div
                    className={
                      'flex flex-col items-start px-4 py-2 odd:bg-white even:bg-white/40 '
                    }
                    key={event.id}
                  >
                    <p>{event.title} </p>

                    <p className="text-sm text-muted-foreground">
                      {event.description.substring(0, 180)}
                    </p>
                  </div>
                ))}
              </VerticalListScroll>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="personnel" className={'flex flex-col '}>
            <AccordionTrigger>Персонал</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <HorizontalCardScroll
                className={
                  'border-0 [&>[data-radix-scroll-area-viewport]>div]:justify-evenly'
                }
              >
                <Card
                  className={cn(
                    'flex aspect-square h-full w-48 cursor-pointer select-none flex-col  text-center',
                    'hover:bg-muted-foreground/40 active:bg-muted-foreground/20'
                  )}
                >
                  <CardHeader className={'m-auto text-2xl'}>
                    <CardTitle>360</CardTitle>
                  </CardHeader>
                </Card>

                <Card
                  className={cn(
                    'flex aspect-square h-full w-48 cursor-pointer select-none flex-col  text-center',
                    'hover:bg-muted-foreground/40 active:bg-muted-foreground/20'
                  )}
                >
                  <CardHeader className={'m-auto text-2xl'}>
                    <CardTitle>1-2-1</CardTitle>
                  </CardHeader>
                </Card>

                <Card
                  className={cn(
                    'flex aspect-square h-full w-48 cursor-pointer select-none flex-col  text-center',
                    'hover:bg-muted-foreground/40 active:bg-muted-foreground/20'
                  )}
                >
                  <CardHeader className={'m-auto text-2xl'}>
                    <CardTitle>Відгуки про працівників</CardTitle>
                  </CardHeader>
                </Card>
              </HorizontalCardScroll>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
export default PersonnelPage
