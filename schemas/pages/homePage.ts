//schemas/pages/homePage.ts
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This is the URL path of the page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'scroller',
      title: 'Scroller',
      type: 'scroller',
    },
    {
      name: 'hiring',
      title: 'Hiring Section',
      type: 'hiring',
    },
    {
      name: 'team',
      title: 'Team Section',
      type: 'team',
    },
    {
      name: 'backers',
      title: 'Backers',
      type: 'backers',
    },
  ],
}
