//schemas/work/projectVideo.ts
import {PlayIcon} from '@sanity/icons'
export default {
  name: 'vimeo',
  title: 'Vimeo Video',
  type: 'object',
  icon: PlayIcon,
  initialValue: {
    aspectRatio: 'horizontal',
  },
  fields: [
    {
      name: 'videoList',
      title: 'Video URL List',
      type: 'array',
      of: [{type: 'url'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          {title: '16:9', value: 'horizontal'},
          {title: 'square', value: 'square'},
        ],
      },
    },
  ],
}
