import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero-word',
  type: 'object',
  title: 'Hero Word',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
