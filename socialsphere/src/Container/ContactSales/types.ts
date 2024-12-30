export interface DemoFormData {
    workEmail: string
    firstName: string
    lastName: string
    companyName: string
    jobTitle: string
    influencerCount: string
    comments: string
    userType: 'agency' | 'brand' | 'creator' | ''
  }
  
  export interface FormErrors {
    [key: string]: string
  }
  
  export interface ClientLogo {
    name: string
    logo: string
  }
  
  