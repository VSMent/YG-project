import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import DepartmentContent from './DepartmentContent'

const EmployeesPage = () => {
  return (
    <>
      <div className="container h-full p-8 pt-6">
        <Accordion
          type="single"
          collapsible={true}
          defaultValue="personnel"
          className={'flex h-full flex-col gap-3'}
        >
          <AccordionItem value="personnel" className={'flex flex-col '}>
            <AccordionTrigger>Відділ Персоналу</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <DepartmentContent department={'personnel'} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="marketing" className={'flex flex-col '}>
            <AccordionTrigger>Відділ Маркетингу</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <DepartmentContent department={'marketing'} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
export default EmployeesPage
