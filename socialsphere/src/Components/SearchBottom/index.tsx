import { Check } from 'lucide-react'

interface FeatureItemProps {
  text: string
}

export function SearchBottom({ text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  )
}

