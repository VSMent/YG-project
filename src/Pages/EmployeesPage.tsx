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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../shadcn-ui/components/ui/avatar'

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
              <div className={'flex flex-row gap-2 '}>
                {[1, 2, 3, 4, 5].map((el) => (
                  // <div className={'bg-yellow-400'} >
                  //   <h3></h3>
                  // </div>
                  <Card key={el}>
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
                    <CardContent className="flex flex-col">
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
                      {/*<Popover>*/}
                      {/*  <PopoverTrigger asChild>*/}
                      {/*    <Button variant="outline" className="ml-auto">*/}
                      {/*      Owner{" "}*/}
                      {/*      <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />*/}
                      {/*    </Button>*/}
                      {/*  </PopoverTrigger>*/}
                      {/*  <PopoverContent className="p-0" align="end">*/}
                      {/*    <Command>*/}
                      {/*      <CommandInput placeholder="Select new role..." />*/}
                      {/*      <CommandList>*/}
                      {/*        <CommandEmpty>No roles found.</CommandEmpty>*/}
                      {/*        <CommandGroup>*/}
                      {/*          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                      {/*            <p>Viewer</p>*/}
                      {/*            <p className="text-sm text-muted-foreground">*/}
                      {/*              Can view and comment.*/}
                      {/*            </p>*/}
                      {/*          </CommandItem>*/}
                      {/*          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                      {/*            <p>Developer</p>*/}
                      {/*            <p className="text-sm text-muted-foreground">*/}
                      {/*              Can view, comment and edit.*/}
                      {/*            </p>*/}
                      {/*          </CommandItem>*/}
                      {/*          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                      {/*            <p>Billing</p>*/}
                      {/*            <p className="text-sm text-muted-foreground">*/}
                      {/*              Can view, comment and manage billing.*/}
                      {/*            </p>*/}
                      {/*          </CommandItem>*/}
                      {/*          <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">*/}
                      {/*            <p>Owner</p>*/}
                      {/*            <p className="text-sm text-muted-foreground">*/}
                      {/*              Admin-level access to all resources.*/}
                      {/*            </p>*/}
                      {/*          </CommandItem>*/}
                      {/*        </CommandGroup>*/}
                      {/*      </CommandList>*/}
                      {/*    </Command>*/}
                      {/*  </PopoverContent>*/}
                      {/*</Popover>*/}
                    </CardContent>
                  </Card>
                ))}
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
