import { Badge, Mail } from 'lucide-react'
import { Profile } from '../types'

interface ProfileInfoProps {
  profile: Profile
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="flex items-start gap-6 p-6">
      <div className="relative">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        {profile.verified && (
          <Badge className="absolute -top-1 -right-1 w-5 h-5 text-blue-500" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl font-semibold">{profile.name}</h1>
          <span className="text-gray-500">@{profile.username}</span>
        </div>
        <p className="text-gray-600 mb-2">{profile.bio}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{profile.location}</span>
          <span>{profile.language}</span>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>{profile.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

