export default {
  name: 'featured-projects',
  type: 'object',
  title: 'Featured Projects',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
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
