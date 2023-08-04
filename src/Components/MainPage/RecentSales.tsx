import { Avatar, AvatarFallback } from '@sh/components/ui/avatar'
import { useSaleStore, useUserStore } from '@hooks/Stores'
import { NumberToCurrency } from '@utils'

export function RecentSales() {
  const { findUserByEmail } = useUserStore()
  const { sales } = useSaleStore()
  const lastSales = sales.slice(-5)

  return (
    <div className="space-y-8">
      {lastSales.map((sale) => {
        const user = findUserByEmail(sale.customer) ?? {
          firstname: 'Іван',
          lastname: 'Іванов',
        }
        const initials = `${user.firstname.charAt(0)}${user.lastname.charAt(0)}`

        return (
          <div key={sale.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {`${user.firstname} ${user.lastname}`}
              </p>
              <p className="text-sm text-muted-foreground">{sale.customer}</p>
            </div>
            <div className="ml-auto font-medium">
              + {NumberToCurrency(sale.price * sale.quantity)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
