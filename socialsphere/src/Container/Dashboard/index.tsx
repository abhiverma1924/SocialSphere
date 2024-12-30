import React from 'react'
import { Header } from './Header'
import { Sidebar } from './SIdebar'
import { MetricCard } from './Metrics'
import { SalesPipeline } from './Pipelines'
import { RevenueForecast } from './Forcast'
import { Button }  from "@mui/material"
import { Filter, Plus } from 'lucide-react'

const metrics = [
  {
    title: 'Active Deals',
    value: 5658,
    previousValue: 4563,
    percentageChange: 23.65,
    currency: 'USD'
  },
  {
    title: 'Revenue Deals',
    value: 89657,
    previousValue: 76852,
    percentageChange: -6.32,
    currency: 'USD'
  },
  {
    title: 'Deals Created',
    value: 2354,
    previousValue: 1578,
    percentageChange: 30.47,
    currency: 'USD'
  },
  {
    title: 'Deals Closing',
    value: 2422,
    previousValue: 2847,
    percentageChange: -8.55,
    currency: 'USD'
  }
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold">Reports</h1>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500">Sales</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outlined" className="gap-2">
                  <Filter className="w-4 h-4" />
                  FILTER
                </Button>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  ADD WIDGETS
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric) => (
                <MetricCard key={metric.title} {...metric} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SalesPipeline />
              <RevenueForecast />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

