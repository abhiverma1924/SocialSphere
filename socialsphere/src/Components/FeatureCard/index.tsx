'use client'

import { Button } from "@mui/material"
import { Check } from 'lucide-react'
import { BUTTON_COLOR } from "../../Constants/styles"

interface FeatureCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  iconBg: string
}

export function FeatureCard({ title, description, features, icon, iconBg }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col">
      <div className="mb-6">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto space-y-3">
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: 'none',
            backgroundColor: BUTTON_COLOR,
            '&:hover': {
              backgroundColor: '#E5E4E2',
              color: 'black',
            },
            py: 1.5,
          }}
        >
          GET STARTED
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: BUTTON_COLOR,
            color: BUTTON_COLOR,
            '&:hover': {
              borderColor: '#E5E4E2',
              backgroundColor: 'transparent',
              color: '#E5E4E2',
            },
            textTransform: 'none',
            py: 1.5,
          }}
        >
          REQUEST DEMO
        </Button>
        <button className="w-full text-gray-400 hover:text-gray-600 transition-colors text-sm">
          LEARN MORE
        </button>
      </div>
    </div>
  )
}

