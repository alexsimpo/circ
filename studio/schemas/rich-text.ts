export default {
  name: 'rich-text',
  type: 'object',
  title: 'Text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
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
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                icon: () => '🔗',
                fields: [
                  {
                    name: 'link',
                    type: 'link',
                    title: 'Link',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
}
