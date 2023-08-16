//schemas/sections/hiring.ts

export default {
  name: 'hiring',
  title: 'Hiring',
  type: 'object',
  initialValue: {
    heading: "We're Hiring",
    subhead: 'Come help us build it.',
    sectionId: 'hiring',
    buttonText: 'Contact Us',
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subhead',
      title: 'Subhead',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
  ],
}
