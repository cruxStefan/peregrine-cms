//schemas/sections/backers.js
export default {
  name: 'backers',
  title: 'Backers',
  type: 'object',
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
      of: [{type: 'reference', to: {type: 'backer'}}],
    },
  ],
}
