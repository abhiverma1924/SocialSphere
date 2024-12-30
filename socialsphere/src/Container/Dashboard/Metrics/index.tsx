import { TrendingDown, TrendingUp } from 'lucide-react'
import { Card, CardContent }  from "@mui/material"
import { MetricCard as MetricCardType } from '../types'

export function MetricCard({ title, value, previousValue, percentageChange, currency }: MetricCardType) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-gray-500">{title}</h3>
          {percentageChange > 0 ? (
            <div className="flex items-center text-green-500 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +{percentageChange.toFixed(2)}%
            </div>
          ) : (
            <div className="flex items-center text-red-500 text-sm">
              <TrendingDown className="w-4 h-4 mr-1" />
              {percentageChange.toFixed(2)}%
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{formatCurrency(value)}</p>
          <p className="text-sm text-gray-500">
            vs last month: {formatCurrency(previousValue)}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

