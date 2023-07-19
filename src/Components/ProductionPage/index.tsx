import {
  DollarSign,
  MonitorPause,
  MonitorPlay,
  MonitorX,
  Server,
  ServerCog,
  ServerCrash,
  ServerOff,
  Wrench,
} from 'lucide-react'
import VerticalListScroll from '../VerticalListScroll'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@sh/components/ui/card'

const ProductionPage = () => {
  return (
    <>
      <div className="container h-full p-8 pt-6">
        <div className={'flex h-full gap-2'}>
          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">'InUse',</CardTitle>
                <ServerCrash className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 231,89 ₴</div>
                <p className="text-xs text-muted-foreground">
                  +20,1% порівняно з минулим місяцем
                </p>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              <div>1</div>
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  'NotInUse',
                </CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 231,89 ₴</div>
                <p className="text-xs text-muted-foreground">
                  +20,1% порівняно з минулим місяцем
                </p>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              <div>1</div>
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  'UnderMaintenance',
                </CardTitle>
                <ServerCog className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 231,89 ₴</div>
                <p className="text-xs text-muted-foreground">
                  +20,1% порівняно з минулим місяцем
                </p>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              <div>1</div>
            </VerticalListScroll>
          </div>

          <div className={'flex flex-1 flex-col gap-4'}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  'OutOfService',
                </CardTitle>
                <ServerOff className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 231,89 ₴</div>
                <p className="text-xs text-muted-foreground">
                  +20,1% порівняно з минулим місяцем
                </p>
              </CardContent>
            </Card>

            <VerticalListScroll className={'h-full'}>
              <div>1</div>
            </VerticalListScroll>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductionPage
