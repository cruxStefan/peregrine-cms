//schemas/content_types/maskedVideo.ts
import {DocumentVideoIcon} from '@sanity/icons'
export default {
  name: 'maskedVideo',
  title: 'Masked video',
  type: 'object',
  icon: DocumentVideoIcon,
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'vimeo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mask',
      title: 'Mask',
      type: 'svgMask',
      validation: (Rule) => Rule.required(),
    },
  ],
}
