import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import DepartmentContent from '../EmployeesPage/DepartmentContent'
import HorizontalCardScroll from '../HorizontalCardScroll'

const PersonnelPage = () => {
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
                children={[1, 2].map((user) => (
                  <div key={user}>{user}</div>
                ))}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="personnel" className={'flex flex-col '}>
            <AccordionTrigger>Персонал</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <DepartmentContent department={'marketing'} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
export default PersonnelPage
