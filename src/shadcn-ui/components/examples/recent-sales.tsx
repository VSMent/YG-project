import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useUserStore } from '../../../Utils/Stores'

type RecentSale = {
  initials: string
  name: string
  email: string
  amount: string
}

export function RecentSales() {
  const { users } = useUserStore()
  const [sales, setSales] = useState<RecentSale[]>([])

  useEffect(() => {
    const newSales: RecentSale[] = []
    users.slice(Math.max(users.length - 5, 1)).forEach((user) => {
      const amount = parseFloat(
        (Math.random() * 10000 + 500).toFixed(2)
      ).toLocaleString('uk-ua')
      newSales.push({
        initials: (
          user.firstname.charAt(0) + user.lastname.charAt(0)
        ).toUpperCase(),
        name: `${user.firstname} ${user.lastname}`,
        email: user.login,
        amount: amount,
      })
    })

    setSales(newSales)
  }, [])

  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div
          key={`${sale.initials} ${sale.amount}`}
          className="flex items-center"
        >
          <Avatar className="h-9 w-9">
            {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
            <AvatarFallback>{sale.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">+ {sale.amount} ₴</div>
        </div>
      ))}
    </div>
  )
}
