//schemas/settings/siteSettings.ts
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  initialValue: {
    docTitle: 'Site Settings',
    email: 'contact@peregrinehydrogen.com',
  },
  fields: [
    {
      name: 'docTitle',
      title: 'Document Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Site-wide logo, used in header and footer.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Main email used for contact links.',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'footerContent',
      title: 'Footer content',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          description: 'Background image for footer.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            {
              name: 'link',
              title: 'Link',
              type: 'object',
              icon: LinkIcon,
              fields: [
                {
                  name: 'linkText',
                  title: 'Link Text',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'linkUrl',
                  title: 'Link URL',
                  type: 'url',
                  validation: (Rule) => Rule.required().uri({allowRelative: true}),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'docTitle',
    },
  },
}
