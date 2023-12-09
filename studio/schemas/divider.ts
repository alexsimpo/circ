import {defineType, defineField} from 'sanity'
import {RemoveIcon} from '@sanity/icons'

export default defineType({
  name: 'divider',
  type: 'object',
  title: 'Divider',
  icon: RemoveIcon,
  fields: [
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
      options: {
        list: ['dark', 'light'],
      },
    }),
  ],
})
