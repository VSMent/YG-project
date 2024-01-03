import {
  CheckCircle,
  CircleEllipsis,
  HelpCircle,
  StopCircle,
} from 'lucide-react'
import VerticalListScroll from '../VerticalListScroll'
import EquipmentRow from './KanbanTaskRow'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'
import { useKanbanTaskStore } from '@hooks/Stores'
import { KanbanTask, PossibleStatuses } from '@type/KanbanTask'

const ProductionPage = () => {
  const { kanbanTasks } = useKanbanTaskStore()

  const taskByStatus: { [status: string]: KanbanTask[] } = {}
  PossibleStatuses.forEach((status) => {
    taskByStatus[status] = kanbanTasks.filter((task) => task.status == status)
  })

  return (
    <>
      <div className="container h-full p-8 pt-6">
        <div className={'flex h-full gap-2'}>
          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">
                  Заплановано
                </CardTitle>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {taskByStatus['Backlog'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {taskByStatus['Backlog'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">В роботі</CardTitle>
                <CircleEllipsis className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {taskByStatus['InProgress'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {taskByStatus['InProgress'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}{' '}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">
                  На перевірці
                </CardTitle>
                <StopCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {taskByStatus['QA'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {taskByStatus['QA'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}{' '}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">Завершено</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {taskByStatus['Complete'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {taskByStatus['Complete'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}{' '}
            </VerticalListScroll>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductionPage
