import {DocumentVideoIcon} from '@sanity/icons'
import seo from './seo'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentVideoIcon,
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
      validation: (Rule: any) =>
        Rule.custom((value: any, {document}: any) => {
          // check if the current document's page title is "Home"
          const isHomePage = document.title === 'Home'

          // if it's the home page, ignore validation
          if (isHomePage) {
            return true
          }

          // otherwise, require the field
          return value !== undefined && value !== null && value !== ''
        }),
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
          name: 'description',
          title: 'Description',
          type: 'text',
        },
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
    seo,
  ],
}
