import { KanbanTask } from '@type/KanbanTask'

type KanbanTaskRowProps = { item: KanbanTask }
const KanbanTaskRow = ({ item }: KanbanTaskRowProps) => {
  return (
    <div
      className={
        'flex flex-col items-start gap-0.5 px-4 py-2 odd:bg-white even:bg-white/40'
      }
    >
      <h2>{item.name}</h2>
      <p className={'text-sm text-muted-foreground'}>{item.description}</p>
    </div>
  )
}
export default KanbanTaskRow
