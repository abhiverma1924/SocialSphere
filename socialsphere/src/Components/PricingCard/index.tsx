import { Check } from 'lucide-react'
import { PricingTier } from './types'

interface PricingCardProps {
  tier: PricingTier
  yearlyDiscount?: boolean
}

export function PricingCard({ tier, yearlyDiscount = false }: PricingCardProps) {
  const priceWithDiscount = yearlyDiscount 
    ? tier.price * 0.7 
    : tier.price

  return (
    <div className={`relative rounded-2xl p-6 bg-white ${
      tier.highlight 
        ? 'border border-purple-900' 
        : tier.name === 'Free' 
          ? 'border border-gray-100' 
          : 'border border-gray-100'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold">
          {tier.name === 'Relume Starter' ? (
            <>
              Relume <span className="text-orange-500">Starter</span>
            </>
          ) : tier.name === 'Relume Pro' ? (
            <>
              Relume <span className="text-purple-600">Pro</span>
            </>
          ) : tier.name === 'Relume Team' ? (
            <>
              Relume <span className="text-blue-500">Team</span>
            </>
          ) : (
            tier.name
          )}
        </h3>
        <div className="w-6 h-6">
          {tier.name !== 'Free' && (
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              />
            </svg>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{tier.description}</p>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${priceWithDiscount}</span>
          <span className="text-gray-600 ml-1">{tier.currency}</span>
        </div>
        <div className="text-sm text-gray-500">{tier.period}</div>
      </div>

      <button className={`w-full py-3 px-4 rounded-lg mb-8 ${
        tier.name === 'Free' 
          ? 'bg-[#6366F1] text-white' 
          : 'bg-[#6366F1] text-white'
      }`}>
        {tier.buttonText}
      </button>

      <div className="space-y-4">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gray-800 mt-0.5" />
            <span className="text-gray-600">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t">
        <div className="flex items-center gap-3">
          {/* <img
            src={tier.persona.avatar}
            alt={tier.persona.title}
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <div>
            <h4 className="font-medium">{tier.persona.title}</h4>
            <p className="text-sm text-gray-600">{tier.persona.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

