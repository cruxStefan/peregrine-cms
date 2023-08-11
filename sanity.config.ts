import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {CogIcon, DocumentsIcon} from '@sanity/icons'

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
            S.listItem().title('Page(s)').icon(DocumentsIcon).child(S.documentTypeList('page')),
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
