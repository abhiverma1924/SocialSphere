import { BrandLogo } from "../types"

const brands: BrandLogo[] = [
  { name: 'Bolt', logo: '/placeholder.svg?height=40&width=100' },
  { name: 'Joom', logo: '/placeholder.svg?height=40&width=100' },
  { name: 'Wolt', logo: '/placeholder.svg?height=40&width=100' },
  { name: 'Kilo.Health', logo: '/placeholder.svg?height=40&width=100' },
]

export function BrandLogos() {
  return (
    <div className="mt-auto">
      <p className="text-black/60 text-center mb-6">
        Trusted by teams at these great brands
      </p>
      {/* <div className="flex justify-center items-center gap-8">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className="h-10 w-auto brightness-0 invert opacity-80"
          />
        ))}
      </div> */}
    </div>
  )
}

