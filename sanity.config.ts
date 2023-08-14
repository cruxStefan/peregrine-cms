import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {CogIcon, HeartIcon, HomeIcon, UsersIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'Peregrine CMS',

  projectId: 'fqizeesj',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .icon(HomeIcon)
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('Team Members')
              .icon(UsersIcon)
              .child(S.documentTypeList('teamMember')),
            S.listItem().title('Backers').icon(HeartIcon).child(S.documentTypeList('backer')),
            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ])
      },
    }),
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
