import { ChevronDownIcon } from '@radix-ui/react-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Components/Accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../shadcn-ui/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../shadcn-ui/components/ui/popover'
import { Button } from '../shadcn-ui/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../shadcn-ui/components/ui/command'
import { ScrollArea } from '../Components/ScrollArea'

const EmployeesPage = () => {
  return (
    <>
      <div className="container h-full p-8 pt-6">
        <Accordion
          type="single"
          collapsible={true}
          defaultValue="personnel-department"
          className={'flex h-full flex-col gap-3'}
        >
          <AccordionItem
            value="personnel-department"
            className={'flex flex-col '}
          >
            <AccordionTrigger>Відділ Персоналу</AccordionTrigger>
            <AccordionContent className={'flex flex-[1_0_1px] flex-col gap-4 '}>
              <ScrollArea
                orientation="horizontal"
                // type={'always'}
                className={
                  'rounded-md border  p-4 text-base ' +
                  // fix radix viewport display
                  '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
                  '[&>[data-radix-scroll-area-viewport]>div]:gap-3 '
                }
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                  <Card className={'bg-muted'} key={el}>
                    <CardHeader>
                      <CardTitle>
                        <div className="flex items-center justify-between space-x-4">
                          <div className="flex items-center space-x-4">
                            <div>
                              <p className="text-sm font-medium leading-none">
                                Name{el} Surname{el}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription>name{el}@gmail.com</CardDescription>
                    </CardHeader>
                    <CardContent className="flex w-max flex-row gap-2">
                      <div className="flex flex-col">
                        <div className={'flex justify-between gap-2'}>
                          <p>Запланованих завдань:</p> <p>{el * 10}</p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Виконаних завдань:</p> <p>{el * 30}</p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Завдань у прогресі:</p> <p>{el * 50}</p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Виконаних завдань:</p> <p>{el * 70}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>

              <ScrollArea
                // type={'always'}
                className={
                  'flex-[1_0_1px] rounded-md border bg-muted p-4 text-base ' +
                  // 'flex ' +
                  // fix radix viewport display
                  '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
                  '[&>[data-radix-scroll-area-viewport]>div]:flex-col ' +
                  '[&>[data-radix-scroll-area-viewport]>div]:gap-3 '
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, i) => (
                  <>
                    <div
                      className={
                        'flex flex-col items-start px-4 py-2 ' +
                        (i % 2 == 0 ? 'bg-white ' : 'bg-white/40 ')
                      }
                    >
                      <p>Завдання {el} щось там зробити</p>
                      <p className="text-sm text-muted-foreground">
                        Короткий опис завдання
                      </p>
                    </div>
                  </>
                ))}
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="marketing-department">
            <AccordionTrigger>Відділ Маркетингу</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
export default EmployeesPage
