import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import TitleCard from './TitleCard'

const SelfManagementPage = () => {
  return (
    <>
      <div className="container flex h-full flex-col p-8 pt-6">
        <Accordion
          type="single"
          collapsible={true}
          defaultValue="recruting"
          className={'flex flex-[1_0_1px] flex-col gap-3'}
        >
          <AccordionItem value="recruting" className={'flex flex-col '}>
            <AccordionTrigger>Робота</AccordionTrigger>
            <AccordionContent
              className={
                'flex flex-[1_0_1px] flex-row flex-wrap content-around justify-evenly gap-4 '
              }
            >
              <TitleCard title="База знань" />
              <TitleCard title="Мої задачі" />
              <TitleCard title="КРІ" />
              <TitleCard title="Календар" />
              <TitleCard title="Заплановані зустрічі" />
              <TitleCard title="Нарахована ЗП" />
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
        <div
          className={'my-10 flex flex-wrap content-around justify-evenly gap-4'}
        >
          <TitleCard
            title="Пульс роботи"
            content="93,8%"
            className="aspect-square w-64"
          />
          <TitleCard
            title="Пульс особистого життя"
            content="76,3%"
            className="aspect-square w-64"
          />
        </div>
      </div>
    </>
  )
}

export default SelfManagementPage
