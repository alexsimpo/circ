import {BlockContentIcon} from '@sanity/icons'

export default {
  name: 'text-cta',
  type: 'object',
  title: 'Text CTA',
  icon: BlockContentIcon,
  fields: [
    {
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
    {
      name: 'byline',
      type: 'text',
      title: 'Byline Text',
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    },
    {
      name: 'additional_link',
      type: 'link',
      title: 'Additional Link',
    },
  ],
}
