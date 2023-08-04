import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { NumberToCurrency } from '@utils'

const data = [
  {
    name: 'Січень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Лютий',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Березень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Квітень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Травень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Червень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Липень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Серпень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Вересень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Жовтень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Листопад',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
  {
    name: 'Грудень',
    total: Math.floor(Math.random() * 23000) + 5000,
  },
]

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={65}
          tickFormatter={
            (value: number) => NumberToCurrency(value)
            // `${value.toLocaleString('uk-ua')} ₴`
          }
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
