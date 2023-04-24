import {BlockquoteIcon} from '@sanity/icons'

export default {
  name: 'text-block',
  type: 'object',
  title: 'Text',
  icon: BlockquoteIcon,
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
