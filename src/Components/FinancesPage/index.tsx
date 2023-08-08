import { ColumnDef } from '@tanstack/react-table'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { DataTable } from '../DataTable'
import { useSaleStore } from '@hooks/Stores'
import { Sale } from '@type/Sale'
import { ConvertToLocalTime, NumberToCurrency } from '@utils'
import { Button } from '@sh/components/ui/button'

const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: 'customer',
    header: 'Клієнт',
  },
  {
    accessorKey: 'product',
    header: 'Товар',
  },
  {
    accessorKey: 'quantity',
    header: 'Кількість',
  },
  {
    accessorKey: 'price',
    header: 'Ціна',
    cell: ({ cell }) => NumberToCurrency(cell.getValue() as number),
  },
  {
    accessorKey: 'total',
    header: 'Сума',
    cell: ({ row }) => {
      const amount =
        parseFloat(row.getValue('price')) * parseFloat(row.getValue('quantity'))
      return NumberToCurrency(amount)
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Час покупки
          {column.getIsSorted() === 'asc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUp className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ cell }) => {
      return ConvertToLocalTime(cell.getValue() as Date)
    },
  },
]

const FinancesPage = () => {
  const { sales } = useSaleStore()

  return (
    <>
      <div className="container h-full p-8 pt-6 ">
        <div className={'flex h-full'}>
          <DataTable
            className={'flex w-full flex-col '}
            columns={columns}
            data={sales}
            pageSize={18}
          />
        </div>
      </div>
    </>
  )
}

export default FinancesPage
