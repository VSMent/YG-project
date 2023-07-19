import { Server, ServerCog, ServerCrash, ServerOff } from 'lucide-react'
import VerticalListScroll from '../VerticalListScroll'
import EquipmentRow from './EquipmentRow'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'
import { useEquipmentStore } from '@utils/Stores'
import { Equipment, PossibleStatuses } from '@type/Equipment'

const ProductionPage = () => {
  const { equipment } = useEquipmentStore()

  const equipmentByStatus: { [status: string]: Equipment[] } = {}
  PossibleStatuses.forEach((status) => {
    equipmentByStatus[status] = equipment.filter(
      (part) => part.status == status
    )
  })

  return (
    <>
      <div className="container h-full p-8 pt-6">
        <div className={'flex h-full gap-2'}>
          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">
                  Використовується
                </CardTitle>
                <ServerCrash className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {equipmentByStatus['InUse'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {equipmentByStatus['InUse'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">
                  Не використовується
                </CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {equipmentByStatus['NotInUse'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {equipmentByStatus['NotInUse'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}{' '}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">В ремонті</CardTitle>
                <ServerCog className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {equipmentByStatus['UnderMaintenance'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {equipmentByStatus['UnderMaintenance'].map((item) => (
                <EquipmentRow item={item} key={item.id} />
              ))}{' '}
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-bold ">Зламаних</CardTitle>
                <ServerOff className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-center text-2xl font-bold ">
                  {equipmentByStatus['OutOfService'].length}
                </div>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              {equipmentByStatus['OutOfService'].map((item) => (
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
