import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {CogIcon, HeartIcon, HomeIcon, UsersIcon} from '@sanity/icons'
import {dashboardTool} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

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
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify Deploys',
          sites: [
            {
              title: 'Peregrine Hydrogen',
              apiId: '57f5d186-3ae8-4d76-be0f-4c7083d25e38',
              buildHookId: '651c27d67992d33719a8f26e',
              name: 'Peregrine Hydrogen',
              url: 'https://peregrine-hydrogen.netlify.app',
              branch: 'prod',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
