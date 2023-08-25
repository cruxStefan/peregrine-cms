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
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [{type: 'outcomeStat'}],
          validation: (Rule) => [
            Rule.required().min(3).max(3).error('You must have exactly 3 stats'),
          ],
        },
      ],
    },
  ],
}
