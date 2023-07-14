import { Badge } from '../../shadcn-ui/components/ui/badge'
import { Task } from '../../data/Task'

type TaskRowProps = {
  task: Task
}
const TaskRow = ({ task }: TaskRowProps) => {
  return (
    <>
      <div
        className={
          'flex flex-col items-start px-4 py-2 odd:bg-white even:bg-white/40 '
        }
        key={task.id}
      >
        <div className={'flex w-full justify-between'}>
          <p>{task.title} </p>
          <Badge variant={'outline'} className={'border-green-400/50 '}>
            {task.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {task.body.substring(0, 180)}
        </p>
      </div>
    </>
  )
}
export default TaskRow
