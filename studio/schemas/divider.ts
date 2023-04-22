import {RemoveIcon} from '@sanity/icons'

export default {
  name: 'divider',
  type: 'object',
  title: 'Divider',
  icon: RemoveIcon,
  fields: [
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      options: {
        list: ['dark', 'light'],
      },
    },
  ],
}
