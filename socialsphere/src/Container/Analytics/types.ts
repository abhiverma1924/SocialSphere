export interface Profile {
    name: string
    username: string
    avatar: string
    bio: string
    location: string
    language: string
    email: string
    verified: boolean
  }
  
  export interface Metrics {
    followers: {
      total: string
      growth: {
        percentage: number
        period: string
      }
    }
    qualityAudience: {
      percentage: number
      total: string
    }
    engagement: {
      rate: number
      authentic: string
      frequency: string
    }
  }
  
  export interface TabItem {
    label: string
    value: string
  }
  
  