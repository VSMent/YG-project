import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '../DataTable'
import { NumberToCurrency } from '@utils'
import { useSaleStore, useUserStore } from '@hooks/Stores'
import { User } from '@type/User'

type CustomerData =
  | User
  | {
      orderCount: number
      totalOrderPrice: number
    }
const columns: ColumnDef<CustomerData>[] = [
  {
    accessorKey: 'firstname',
    header: "Ім'я",
  },
  {
    accessorKey: 'lastname',
    header: 'Прізвище',
  },
  {
    accessorKey: 'email',
    header: 'E-mail',
  },
  {
    accessorKey: 'orderCount',
    header: 'Кількість покупок',
  },
  {
    accessorKey: 'totalOrderPrice',
    header: 'Загальна вартість покупок',
    cell: ({ cell }) => NumberToCurrency(cell.getValue() as number),
  },
]

const ClientsPage = () => {
  const { users } = useUserStore()
  const { findSalesByCustomerEmail } = useSaleStore()

  const customers: CustomerData[] = users
    .filter((user) => user.role === 'user')
    .map((user) => {
      const userSales = findSalesByCustomerEmail(user.email)
      const orderCount = userSales.length
      const totalOrderPrice = userSales.reduce(
        (acc, sale) => acc + sale.quantity * sale.price,
        0
      )
      return {
        ...user,
        orderCount,
        totalOrderPrice,
      }
    })

  return (
    <>
      <div className="container h-full p-8 pt-6">
        <div className={'flex h-full'}>
          <DataTable
            className={'flex w-full flex-col '}
            columns={columns}
            data={customers}
            pageSize={20}
          />
        </div>
      </div>
    </>
  )
}
export default ClientsPage
