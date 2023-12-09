import {defineType, defineField, defineArrayMember} from 'sanity'
import {ThListIcon} from '@sanity/icons'
import display from './display'

export default defineType({
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  icon: ThListIcon,
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
          name: 'accordionItem',
          type: 'object',
          title: 'Accordion Item',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'description',
              of: [
                {
                  type: 'block',
                  styles: [],
                  lists: [],
                  marks: {
                    decorators: [{title: 'Underline', value: 'underline'}],
                    annotations: [
                      defineArrayMember({
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          defineField({
                            name: 'link',
                            type: 'link',
                            title: 'Link',
                          }),
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
          ],
        }),
      ],
    }),
    display,
  ],
})
