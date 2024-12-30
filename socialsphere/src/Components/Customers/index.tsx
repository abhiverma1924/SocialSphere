import { ProductCard } from "../ProductOffering/ProductCard";
import { SimpleFeature } from "../ProductOffering/SimpleFeature";

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
    title: 'Agency',
    description: '',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Influencer',
    description: 'Individual Creator',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Brand',
    description: '',
    image: '/placeholder.svg?height=300&width=400',
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
]

export default function CustomerFeature() {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainFeatures.map((feature: any) => (
            <ProductCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Additional Features */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-900"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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