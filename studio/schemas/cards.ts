export default {
  name: 'cards',
  type: 'object',
  title: 'Cards',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'object',
          name: 'cardItem',
          title: 'Card Item',
          fields: [
            {
              name: 'media',
              type: 'media',
              title: 'Media',
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'link',
              type: 'link',
              title: 'Link',
            },
          ],
        },
      ],
    },
  ],
}
