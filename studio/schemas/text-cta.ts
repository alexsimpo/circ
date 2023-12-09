import {defineType, defineField, defineArrayMember} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'
import display from './display'

export default defineType({
  name: 'text-cta',
  title: 'Text CTA',
  type: 'object',
  icon: BlockContentIcon,
  groups: [
    {
      name: 'display',
      title: 'Display',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'array',
      title: 'Heading',
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
    defineField({
      name: 'byline',
      type: 'text',
      title: 'Byline Text',
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Link',
    }),
    defineField({
      name: 'additional_link',
      type: 'link',
      title: 'Additional Link',
    }),
    display,
  ],
})
