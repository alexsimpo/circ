import {defineType, defineField, defineArrayMember} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export default defineType({
  name: 'featured-projects',
  type: 'object',
  title: 'Featured Projects',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Link',
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        defineArrayMember({
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [{type: 'project'}],
        }),
      ],
    }),
  ],
})
