//schemas/sections/privacy.ts
export default {
  name: 'privacy',
  title: 'Privacy Policy',
  type: 'object',
  fields: [
    {
      name: 'privacyText',
      title: 'Privacy Text',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
