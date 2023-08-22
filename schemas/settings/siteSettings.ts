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
      ],
    },
    {
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'privacy',
    },
    {
      name: 'pressKit',
      title: 'Press Kit',
      type: 'file',
      description: 'Press kit for download.',
    },
  ],
  preview: {
    select: {
      title: 'docTitle',
    },
  },
}
