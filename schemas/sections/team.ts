//schemas/sections/team.ts
import {UserIcon} from '@sanity/icons'
export default {
  name: 'team',
  title: 'Team',
  type: 'object',
  icon: UserIcon,
  initialValue: {
    heading: 'Team',
    sectionId: '#team',
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Heading for the team section.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'ID for the team section—used for page anchors.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'teamMember',
          },
        },
      ],
    },
  ],
}
