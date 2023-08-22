//schemas/content_types/teamMember.ts
import {UserIcon} from '@sanity/icons'
export default {
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  preview: {
    select: {
      title: 'teamMember.name',
      media: 'teamMember.photo',
    },
  },
  fields: [
    {
      name: 'teamMember',
      title: 'Team Member',
      type: 'object',
      icon: UserIcon,
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'linkedIn',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'photo',
          title: 'Photo',
          type: 'image',
          description: 'Requirements: JPEG format, full color, 802x962px.',
          options: {
            accept: 'image/jpeg',
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
