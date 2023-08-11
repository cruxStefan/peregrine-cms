//schemas/content_types/videoMask.ts
import {ImagesIcon} from '@sanity/icons'
export default {
  name: 'svgMask',
  title: 'SVG Mask',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    {
      name: 'maskPath',
      title: 'Mask Path',
      type: 'string',
      description:
        "Path data to mask image. Not exactly plug-and-play. You'll have to do some CSS work.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'maskId',
      title: 'Mask ID',
      type: 'string',
      description: "ID of the mask image. Used to clip the video's container.",
      validation: (Rule) => Rule.required(),
    },
  ],
}
