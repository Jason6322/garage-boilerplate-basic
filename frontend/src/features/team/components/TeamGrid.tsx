import { teamMembers } from '../data'
import { TeamMemberCard } from './TeamMemberCard'

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member, i) => (
        <TeamMemberCard key={`${member.name}-${i}`} member={member} />
      ))}
    </div>
  )
}
