import seo from './seo'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: () => '🖼',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
      group: 'content',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'header',
      title: 'Header Section',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'media',
          title: 'Media',
          type: 'object',
          options: {
            collapsible: false,
            collapsed: false,
            columns: 2,
          },
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'year',
          title: 'Year',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
        },
        {
          name: 'scope',
          title: 'Scope',
          type: 'string',
        },
        {
          name: 'credits',
          title: 'Credits',
          type: 'text',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      group: 'content',
      of: [
        {type: 'text-cta'},
        {type: 'featured-projects'},
        {type: 'divider'},
        {type: 'text-block'},
        {type: 'cards'},
      ],
    },
    seo,
  ],
}
