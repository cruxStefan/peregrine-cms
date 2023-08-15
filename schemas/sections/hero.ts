//schemas/sections/hero.ts
import {StarIcon} from '@sanity/icons'
export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: StarIcon,
  initialValue: {
    title: 'Site Hero',
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
      description: 'This is the text that appears on the hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'vimeo',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
