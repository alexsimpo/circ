import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  options: {
    collapsible: false,
    collapsed: false,
    columns: 2,
  },
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
    }),
  ],
})
