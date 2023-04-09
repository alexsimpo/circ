import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {MenuIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'dimgray-moose',

  projectId: 'a4e10acw',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !['menu'].includes(listItem.getId() || '')
            ),
            S.listItem()
              .title('Menus')
              .icon(MenuIcon)
              .child(S.document().schemaType('menu').documentId('menu')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
