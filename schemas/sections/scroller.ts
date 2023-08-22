//schemas/sections/scroller.ts

export default {
  name: 'scroller',
  title: 'Scroller',
  type: 'object',
  fields: [
    {
      name: 'problemSection',
      title: 'The Problem Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'introText',
          title: 'Intro Text',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'topLeftHeading',
          title: 'Top Left Heading',
          type: 'string',
        },
        {
          name: 'botRightHeading',
          title: 'Bottom Right Heading',
          type: 'string',
        },
        {
          name: 'video',
          title: 'Video',
          type: 'vimeo',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'solutionSection',
      title: 'The Solution Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'introText',
          title: 'Intro Text',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'topLeftHeading',
          title: 'Top Left Heading',
          type: 'string',
        },
        {
          name: 'topLeftText',
          title: 'Top Left Text',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'botRightHeading',
          title: 'Bottom Right Heading',
          type: 'string',
        },
        {
          name: 'botRightText',
          title: 'Bottom Right Text',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'vimeo',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'outcomeSection',
      title: 'The Outcome Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'introText',
          title: 'Intro Text',
          type: 'array',
          of: [{type: 'block'}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'video',
          title: 'Video',
          type: 'vimeo',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'logoText',
          title: 'Logo Text',
          type: 'image',
          description: 'This is the logo text that appears over the masked video.',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}
