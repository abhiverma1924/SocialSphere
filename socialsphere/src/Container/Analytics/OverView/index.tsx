import { TrendingUp, Info } from 'lucide-react'

import { Tooltip } from '@mui/material'
import { Metrics } from '../types'

interface MetricsGridProps {
  metrics: Metrics
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Followers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">Followers</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{metrics.followers.total}</p>
        </div>
      </div>

      {/* Quality Audience */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">
            Quality audience
            <Tooltip title="Percentage of real and active followers">
              <Info className="inline-block w-4 h-4 ml-1 text-gray-400" />
            </Tooltip>
          </h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{metrics.qualityAudience.percentage}%</p>
          <p className="text-sm text-gray-500">{metrics.qualityAudience.total}</p>
        </div>
      </div>

      {/* Followers Growth */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">Followers growth</h3>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <p className="text-3xl font-bold">{metrics.followers.growth.percentage}%</p>
          </div>
          <p className="text-sm text-gray-500">per {metrics.followers.growth.period}</p>
        </div>
      </div>

      {/* Engagement Rate */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">Engagement Rate</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{metrics.engagement.rate}%</p>
        </div>
      </div>

      {/* Authentic Engagement */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">
            Authentic engagement
            <Tooltip title="Average engagement from real accounts">
              <Info className="inline-block w-4 h-4 ml-1 text-gray-400" />
            </Tooltip>
          </h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{metrics.engagement.authentic}</p>
          <p className="text-sm text-gray-500">per post</p>
        </div>
      </div>

      {/* Post Frequency */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600">Post Frequency</h3>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{metrics.engagement.frequency}</p>
          <p className="text-sm text-gray-500">Average</p>
        </div>
      </div>
    </div>
  )
}

