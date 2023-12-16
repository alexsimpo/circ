import {defineType, defineField, defineArrayMember} from 'sanity'
import {InlineIcon} from '@sanity/icons'
import display, {mediaRatio} from './display'

export default defineType({
  name: 'cards',
  type: 'object',
  title: 'Cards',
  icon: InlineIcon,
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
      name: 'description',
      title: 'Description',
      type: 'text',
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
              name: 'media',
              type: 'media',
              title: 'Media',
            }),
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
            defineField({
              name: 'link',
              type: 'link',
              title: 'Link',
            }),
            defineField({
              name: 'mediaRatio',
              title: 'Media Ratio',
              type: 'string',
              options: {
                list: mediaRatio,
                layout: 'dropdown',
              },
            }),
          ],
        }),
      ],
    }),
    display,
  ],
})
