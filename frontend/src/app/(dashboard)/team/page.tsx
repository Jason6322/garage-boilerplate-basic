import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { PageHeader } from '@/components/layout/PageHeader'
import { TeamGrid } from '@/features/team/components/TeamGrid'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()
  return (
    <div className="space-y-6">
      <PageHeader
        title="Team 46B"
        description="Five roles, one shared repo — from requirements to a deployed feature."
      />
      <TeamGrid />
    </div>
  )
}
