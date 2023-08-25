//schemas/content_types/outcomeStat.ts

export default {
  name: 'outcomeStat',
  title: 'Outcome stat',
  type: 'object',
  fields: [
    {
      name: 'statImage',
      title: 'Stat Image',
      type: 'image',
      description: 'Image for the stat, should be roughly square, white, transparent PNG or SVG.',
      validation: (Rule) => Rule.required(),
      options: {
        accepts: '.png, .svg',
      },
    },
    {
      name: 'statAlt',
      title: 'Stat Image Alt Text',
      type: 'string',
      description:
        'Alt text for the stat image. Essentially just repeat what the image says in plain English.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'statText',
      title: 'Stat Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
