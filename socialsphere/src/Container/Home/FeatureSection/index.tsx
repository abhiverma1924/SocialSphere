'use client'

import { Search, BarChart2, LayoutDashboard, Globe } from 'lucide-react'
import { FeatureCard } from '../../../Components/FeatureCard'

const features = [
  {
    title: "Discover influencers",
    description: "Find influencers with the audiences you need within a 205.4M+ database",
    features: [
      "205.4M+ accounts",
      "Demographic search",
      "Audience quality filters"
    ],
    icon: <Search className="w-6 h-6 text-blue-500" />,
    iconBg: "bg-blue-50"
  },
  {
    title: "Analyze accounts",
    description: "Use over 35 in-depth metrics to analyze influencers on Instagram, TikTok, Twitch, X (Twitter), and YouTube",
    features: [
      "Audience demographics",
      "Fraud detection",
      "Brand affinity"
    ],
    icon: <BarChart2 className="w-6 h-6 text-orange-500" />,
    iconBg: "bg-orange-50"
  },
  {
    title: "Manage campaigns",
    description: "Track and monitor your influencer marketing campaigns",
    features: [
      "Campaign media plans",
      "KPI estimates",
      "Performance insights"
    ],
    icon: <LayoutDashboard className="w-6 h-6 text-purple-500" />,
    iconBg: "bg-purple-50"
  },
  {
    title: "Explore markets",
    description: "Analyze your competitors' influencer marketing campaigns and industry trends",
    features: [
      "Competitor analysis",
      "Global market research",
      "Trends & ranking analytics"
    ],
    icon: <Globe className="w-6 h-6 text-indigo-500" />,
    iconBg: "bg-indigo-50"
  }
]

export default function FeatureSection() {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          A full stack of solutions for every step of the
        </h1>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          influencer marketing workflow:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              icon={feature.icon}
              iconBg={feature.iconBg}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

