'use client'

import { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import { TabItem } from './types'
import { Header } from '../../Components/Header'

const tabItems: TabItem[] = [
  { label: 'Overview', value: 'overview' },
  { label: 'Audience', value: 'audience' },
  { label: 'Growth', value: 'growth' },
  { label: 'Engagement', value: 'engagement' },
  { label: 'Value', value: 'value' },
  { label: 'Content', value: 'content' },
  { label: 'Brand Mentions', value: 'brand-mentions' },
  { label: 'Look alike influencers', value: 'look-alike' }
]

export function Analytics() {
  const [value, setValue] = useState('overview')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Header/>
      <Tabs 
        value={value} 
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            minHeight: '48px',
            color: 'rgb(107 114 128)',
            '&.Mui-selected': {
              color: 'rgb(17 24 39)',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'rgb(17 24 39)',
          },
        }}
      >
        {tabItems.map((tab) => (
          <Tab 
            key={tab.value}
            label={tab.label}
            value={tab.value}
            sx={{ fontSize: '0.875rem' }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

