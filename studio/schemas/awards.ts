import {defineType, defineField, defineArrayMember} from 'sanity'
import {OkHandIcon} from '@sanity/icons'
import display from './display'

export default defineType({
  name: 'awards',
  type: 'object',
  title: 'Awards',
  icon: OkHandIcon,
  groups: [
    {
      name: 'display',
      title: 'Display',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        defineArrayMember({
          name: 'cardItem',
          type: 'object',
          title: 'Card Item',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    display,
  ],
})
