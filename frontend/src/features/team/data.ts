import type { TeamMember } from './types'

export const teamMembers: TeamMember[] = [
  {
    name: 'David Zytsel',
    role: 'PM',
    blurb: 'Coordinates timelines and client meetings, manages the team’s Planner board, and signs off on work before it ships.',
  },
  {
    name: 'Piotr Wesolowski',
    role: 'BA',
    blurb: 'Defines requirements, analyses stakeholder needs, and bridges business goals with what the team builds.',
  },
  {
    name: 'Tommy Ngo',
    role: 'UX Designer',
    blurb: 'Designs user flows, wireframes, and prototypes that turn requirements into an experience the team can build from.',
  },
  {
    name: 'Jason Xu',
    role: 'Dev 1',
    blurb: 'Builds the solution - implementing features, architecture, and deployment from the UX and BA specs.',
  },
  {
    name: 'Saneli Thathsari Ratnayake',
    role: 'Dev 2',
    blurb: 'Tests the features Dev 1 builds - verifying functionality, catching edge cases, and signing off before release.',
  },
]
