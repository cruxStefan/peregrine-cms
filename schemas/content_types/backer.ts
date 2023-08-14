//schemas/content_types/backer.ts
import {HeartIcon} from '@sanity/icons'
export default {
  name: 'backer',
  title: 'Backer',
  type: 'document',
  preview: {
    select: {
      title: 'backer.name',
      media: 'backer.logo',
    },
  },
  fields: [
    {
      name: 'backer',
      title: 'Backer',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Backer Name',
          type: 'string',
          description: 'Name of the backing organization.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'logo',
          title: 'Backer Logo',
          type: 'image',
          description: 'Logo of the backing organization.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          title: 'Backer URL',
          type: 'url',
          description: 'URL of the backing organization (if applicable).',
        },
      ],
    },
  ],
}
