import { ClientLogo } from '../types';

const clients: ClientLogo[] = [
  { name: 'GroupM', logo: '/placeholder.svg?height=40&width=120' },
  { name: 'LVMH', logo: '/placeholder.svg?height=40&width=120' },
  { name: 'Ogilvy', logo: '/placeholder.svg?height=40&width=120' },
  { name: 'Unilever', logo: '/placeholder.svg?height=40&width=120' },
  { name: 'Dior', logo: '/placeholder.svg?height=40&width=120' },
  { name: "L'Oreal", logo: '/placeholder.svg?height=40&width=120' },
]

export function ClientLogos() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">
        Join the growing network of brands and agencies using SocialSphere today
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-white p-6 rounded-lg flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

