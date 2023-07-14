import { ChevronDownIcon } from '@radix-ui/react-icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../shadcn-ui/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../shadcn-ui/components/ui/popover'
import { Button } from '../../shadcn-ui/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../../shadcn-ui/components/ui/command'
import { ScrollArea } from '../ScrollArea'
import { useTaskStore, useUserStore } from '../../Utils/Stores'
import { Task } from '../../data/Task'

const EmployeesPage = () => {
  const { users, findUsersByDepartment } = useUserStore()
  const { findTasksForEmployee, sortTasksByStatuses } = useTaskStore()

  const personnelUsers = findUsersByDepartment('personnel')
  const marketingUsers = findUsersByDepartment('marketing')
  const userTasks: {
    personnel: { [key: string]: { [key: string]: Task[] } }
    marketing: { [key: string]: { [key: string]: Task[] } }
  } = {
    personnel: {},
    marketing: {},
  }

  personnelUsers.forEach((user) => {
    userTasks.personnel[user.login] = sortTasksByStatuses(
      findTasksForEmployee(user.login)
    )
  })
  marketingUsers.forEach((user) => {
    userTasks.marketing[user.login] = sortTasksByStatuses(
      findTasksForEmployee(user.login)
    )
  })

  console.log(userTasks)
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
                {personnelUsers.map((user) => (
                  <Card className={'bg-muted'} key={user.login}>
                    <CardHeader>
                      <CardTitle>
                        <div className="flex items-center justify-between space-x-4">
                          <div className="flex items-center space-x-4">
                            <div>
                              <p className="text-sm font-medium leading-none">
                                {`${user.firstname} ${user.lastname}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardTitle>
                      <CardDescription>{user.login}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex w-max flex-row gap-2">
                      <div className="flex flex-col">
                        <div className={'flex justify-between gap-2 '}>
                          <p>Запланованих завдань:</p>{' '}
                          <p>
                            {userTasks.personnel[user.login]['New']?.length ??
                              0}
                          </p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Завдань у прогресі:</p>{' '}
                          <p>
                            {userTasks.personnel[user.login]['InProgress']
                              ?.length ?? 0}
                          </p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Завдань на перевірці</p>{' '}
                          <p>
                            {userTasks.personnel[user.login]['InCheck']
                              ?.length ?? 0}
                          </p>
                        </div>
                        <div className={'flex justify-between gap-2'}>
                          <p>Виконаних завдань:</p>{' '}
                          <p>
                            {userTasks.personnel[user.login]['Done']?.length ??
                              0}
                          </p>
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
                {Object.entries(userTasks.personnel).map(
                  ([user, sortedTasks]) =>
                    Object.entries(sortedTasks).map(([status, tasks]) =>
                      tasks.map((task) => (
                        <>
                          <div
                            className={
                              'flex flex-col items-start px-4 py-2 odd:bg-white even:bg-white/40'
                            }
                            key={task.id}
                          >
                            <p>{task.title} </p>
                            <span className={'self-end '}>{task.status}</span>
                            <p className="text-sm text-muted-foreground">
                              {task.body.substring(0, 180)}
                            </p>
                          </div>
                        </>
                      ))
                    )
                )}
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
