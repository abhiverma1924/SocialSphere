export interface SignUpFormData {
    fullName: string
    workEmail: string
    password: string
    marketingConsent: boolean
  }
  
  export interface BrandLogo {
    name: string
    logo: string
  }
  
  export interface CampaignPartner {
    name: string
    avatar: string
    status: string
    labels: string[]
    notes: string
  }
  
  