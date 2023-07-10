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
          className={'flex h-full flex-col gap-4'}
        >
          <AccordionItem value="personnel-department">
            <AccordionTrigger>Відділ Персоналу</AccordionTrigger>
            <AccordionContent>
              <div
                className={
                  '' +
                  // 'flex flex-row gap-2 ' +
                  ''
                }
              >
                <ScrollArea
                  orientation="horizontal"
                  // type={'always'}
                  className={
                    'flex flex-[1_0_1px] flex-row rounded-md border p-4 text-base ' +
                    // // fix radix viewport display
                    '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +
                    '[&>[data-radix-scroll-area-viewport]>div]:flex-row ' +
                    '[&>[data-radix-scroll-area-viewport]>div]:gap-3 '
                  }
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
                    <Card className={''} key={el}>
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
                        {/*<ScrollArea*/}
                        {/*  // type={'always'}*/}
                        {/*  className={*/}
                        {/*    'flex-[1_0_200px] rounded-md border text-base ' +*/}
                        {/*    // fix radix viewport display*/}
                        {/*    '[&>[data-radix-scroll-area-viewport]>div]:!flex ' +*/}
                        {/*    '[&>[data-radix-scroll-area-viewport]>div]:flex-col ' +*/}
                        {/*    '[&>[data-radix-scroll-area-viewport]>div]:gap-3 ' +*/}
                        {/*    '[&>[data-radix-scroll-area-viewport]>div]:p-4 '*/}
                        {/*  }*/}
                        {/*>*/}
                        {/*  <ul>*/}
                        {/*    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (*/}
                        {/*      <li>{el}</li>*/}
                        {/*    ))}*/}
                        {/*  </ul>*/}
                        {/*</ScrollArea>*/}

                        {/*<Popover>*/}
                        {/*  <PopoverTrigger asChild={true}>*/}
                        {/*    <Button variant="outline" className="ml-auto">*/}
                        {/*      Owner{' '}*/}
                        {/*      <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />*/}
                        {/*    </Button>*/}
                        {/*  </PopoverTrigger>*/}
                        {/*  <PopoverContent className="p-0" align="end">*/}
                        {/*    <Command>*/}
                        {/*      <CommandInput placeholder="Select new role..." />*/}
                        {/*      <CommandList>*/}
                        {/*        <CommandEmpty>No roles found.</CommandEmpty>*/}
                        {/*        <CommandGroup>*/}
                        {/*          <div className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                        {/*            <p>Viewer</p>*/}
                        {/*            <p className="text-sm text-muted-foreground">*/}
                        {/*              Can view and comment.*/}
                        {/*            </p>*/}
                        {/*          </div>*/}
                        {/*          <div className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                        {/*            <p>Developer</p>*/}
                        {/*            <p className="text-sm text-muted-foreground">*/}
                        {/*              Can view, comment and edit.*/}
                        {/*            </p>*/}
                        {/*          </div>*/}
                        {/*          <div className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                        {/*            <p>Billing</p>*/}
                        {/*            <p className="text-sm text-muted-foreground">*/}
                        {/*              Can view, comment and manage billing.*/}
                        {/*            </p>*/}
                        {/*          </div>*/}
                        {/*          <div className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                        {/*            <p>Owner</p>*/}
                        {/*            <p className="text-sm text-muted-foreground">*/}
                        {/*              Admin-level access to all resources.*/}
                        {/*            </p>*/}
                        {/*          </div>*/}
                        {/*        </CommandGroup>*/}
                        {/*      </CommandList>*/}
                        {/*    </Command>*/}
                        {/*  </PopoverContent>*/}
                        {/*</Popover>*/}
                      </CardContent>
                    </Card>
                  ))}
                </ScrollArea>
              </div>
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
