
import { ProductCard } from "./ProductCard";
import { SimpleFeature } from "./SimpleFeature"

export interface MainFeature {
    title: string;
    description: string;
    image: string;
  }
  
  export interface AdditionalFeature {
    title: string;
    isNew?: boolean;
  }
  
  
const mainFeatures: MainFeature[] = [
  {
    title: 'Manage Creators',
    description: 'Get everything you need for collaborating at your disposal',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Discover Influencers',
    description: 'Find influencers by parameters across 205.4M+ database',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Recruit influencers',
    description: 'Expand your search tactics to find relevant creators',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Analyze Influencers',
    description: 'Check any influencer audience, performance and fraud issues',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Manage Campaigns',
    description: 'Track progress of your campaigns and accounts',
    image: '/placeholder.svg?height=400&width=600',
  },
]

const additionalFeatures: AdditionalFeature[][] = [
  [
    { title: 'Media Monitor', isNew: true },
    { title: 'Media Plans' },
    { title: 'Market Analysis' },
  ],
  [
    { title: 'Influencer Outreach' },
    { title: 'Competitor Analysis' },
  ],
  [
    { title: 'E-Commerce' },
    { title: 'Chrome Extension' },
  ],
  [
    { title: 'Influencer Payments' },
    { title: 'Professional Services' },
  ],
  [
    { title: 'Zapier Integration' },
    { title: 'Sphere API' },
  ],
]

export default function Productfeature() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {mainFeatures.map((feature : any) => (
            <ProductCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Additional Features */}
        <div className="space-y-12">
          <h2 className="text-xl font-semibold text-gray-900">More features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {additionalFeatures.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((feature) => (
                  <SimpleFeature
                    key={feature.title}
                    title={feature.title}
                    isNew={feature.isNew}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

