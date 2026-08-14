import Image from 'next/image'
import { truncate } from '@/lib/utils'
import type { TeamMember } from '../types'

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-zinc-200 p-6 text-center dark:border-zinc-800">
      {member.photoUrl ? (
        <Image
          src={member.photoUrl}
          alt={member.name}
          width={80}
          height={80}
          unoptimized
          className="h-20 w-20 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-200 text-lg font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {getInitials(member.name)}
        </div>
      )}
      <p className="mt-3 w-full truncate font-semibold">{truncate(member.name, 40)}</p>
      <p className="w-full truncate text-sm text-zinc-500">{truncate(member.role, 30)}</p>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-500">{truncate(member.blurb, 150)}</p>
    </div>
  )
}
