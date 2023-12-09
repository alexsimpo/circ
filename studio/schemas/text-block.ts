import {defineType, defineField} from 'sanity'
import {BlockquoteIcon} from '@sanity/icons'

export default defineType({
  name: 'text-block',
  title: 'Text',
  type: 'object',
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            annotations: [
              defineField({
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
})
