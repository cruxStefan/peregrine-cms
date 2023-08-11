//schemas/sections/backers.js
import {HeartIcon} from '@sanity/icons'

export default {
  name: 'backers',
  title: 'Backers',
  type: 'object',
  icon: HeartIcon,
  initialValue: {
    heading: 'Backers',
    sectionId: '#backers',
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Heading for the backers section.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'ID for the backers section—used for page anchors.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backers',
      title: 'Backers',
      type: 'array',
      of: [
        {
          name: 'backer',
          title: 'Backer',
          type: 'object',
          icon: HeartIcon,
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
    },
  ],
}
