import CampaignImg from '../../../Assets/Images/campaign.svg' 
import { CampaignPartner } from '../types'

const partners: CampaignPartner[] = [
  {
    name: 'Bessie Alexander',
    avatar: '/placeholder.svg?height=32&width=32',
    status: 'Hired',
    labels: ['university-student', 'vegan'],
    notes: '5 stories, 2 posts & 2 reels.'
  },
  // Additional partners would be added here
]

export function CampaignTable() {
  return (
    <div className="bg-[#f5f3ff]">
     <img src={CampaignImg} alt='campaign img'/>
    </div>
  )
}

