import {PresentationIcon} from '@sanity/icons'

export default {
  name: 'featured-projects',
  type: 'object',
  title: 'Featured Projects',
  icon: PresentationIcon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [{type: 'project'}],
        },
      ],
    },
  ],
}
