export interface PricingFeature {
    text: string
    icon?: string
  }
  
  export interface PricingTier {
    name: string
    description: string
    price: number
    period: string
    currency: string
    features: PricingFeature[]
    buttonText: string
    persona: {
      title: string
      description: string
      avatar: string
    }
    highlight?: boolean
  }
  
  