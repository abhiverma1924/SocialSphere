import React from 'react'
import { Card, CardContent, CardHeader }  from "@mui/material"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { PipelineStage } from '../types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const stages: PipelineStage[] = [
  { name: 'Leads', value: 47569, deals: 57 },
  { name: 'Proposal', value: 35258, deals: 46 },
  { name: 'Contract', value: 24569, deals: 34 },
  { name: 'Project', value: 53853, deals: 42 }
]

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      type: 'category',
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value : any) => `$${(Number(value)/1000).toFixed(0)}k`
      },
    //   grid: {
    //     borderDash: [2, 4]
    //   }
    }
  }
}

export function SalesPipeline() {
  const data: ChartData<'bar'> = {
    labels: stages.map(stage => stage.name),
    datasets: [
      {
        data: stages.map(stage => stage.value),
        backgroundColor: '#4F46E5',
        borderRadius: 4
      }
    ]
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        {/* <CardTitle>Sales Pipeline</CardTitle> */}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stages.map((stage) => (
            <div key={stage.name} className="text-center p-4 border rounded-lg">
              <h4 className="font-medium mb-2">{stage.name}</h4>
              <p className="text-xl font-bold mb-1">
                ${(stage.value / 1000).toFixed(0)}k
              </p>
              <p className="text-sm text-gray-500">{stage.deals} Deals</p>
            </div>
          ))}
        </div>
        <div className="h-[300px]">
          <Bar options={options} data={data} />
        </div>
      </CardContent>
    </Card>
  )
}

