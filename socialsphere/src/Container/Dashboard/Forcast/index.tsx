import { Card, CardContent, CardHeader }  from "@mui/material"
import { CircularProgress } from '@mui/material'
import { Goal } from '../types'
import { Target, Users, TrendingUp, DollarSign } from 'lucide-react'

const goals: Goal[] = [
  {
    title: 'Marketing Goal',
    current: 5500,
    target: 8125,
    currency: 'USD',
    icon: 'Target'
  },
  {
    title: 'Teams Goal',
    current: 8550,
    target: 9250,
    currency: 'USD',
    icon: 'Users'
  },
  {
    title: 'Leads Goal',
    current: 850,
    target: 950,
    currency: 'USD',
    icon: 'TrendingUp'
  },
  {
    title: 'Revenue Goal',
    current: 5655,
    target: 12500,
    currency: 'USD',
    icon: 'DollarSign'
  }
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Target':
      return <Target className="w-5 h-5" />
    case 'Users':
      return <Users className="w-5 h-5" />
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5" />
    case 'DollarSign':
      return <DollarSign className="w-5 h-5" />
    default:
      return null
  }
}

export function RevenueForecast() {
  const progress = 63

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Revenue Forecast</CardTitle> */}
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <CircularProgress
              variant="determinate"
              value={progress}
              size={200}
              thickness={4}
              sx={{
                color: '#4F46E5',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                }
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-4xl font-bold">{progress}%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="flex items-center p-4 border rounded-lg"
            >
              <div className="p-2 rounded-full bg-gray-100 mr-4">
                {getIcon(goal.icon)}
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">{goal.title}</h4>
                <p className="text-xs text-gray-500">
                  ${goal.current.toLocaleString()}/{goal.target.toLocaleString()} {goal.currency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

