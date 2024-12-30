export interface MetricCard {
    title: string
    value: number
    previousValue: number
    percentageChange: number
    currency: string
  }
  
  export interface PipelineStage {
    name: string
    value: number
    deals: number
  }
  
  export interface Goal {
    title: string
    current: number
    target: number
    currency: string
    icon: string
  }
  
  export interface NavigationItem {
    name: string
    icon: string
    path: string
  }
  
  