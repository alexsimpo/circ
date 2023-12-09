import {defineArrayMember, defineField, defineType} from 'sanity'
import seo from './seo'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
      group: 'content',
    }),
    defineField({
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
    }),
    defineField({
      name: 'header',
      title: 'Header Section',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          hidden: ({document}: any) => document.slug?.current === 'home',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          hidden: ({document}: any) => document.slug?.current === 'home',
        },
        {
          name: 'media',
          title: 'Media',
          type: 'media',
          hidden: ({document}: any) => document.slug?.current === 'home',
        },
        {
          name: 'heroSection',
          title: 'Hero Items',
          type: 'array',
          hidden: ({document}: any) => document.slug?.current !== 'home',
          of: [defineArrayMember({name: 'hero-word', type: 'hero-word'})],
        },
      ],
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      group: 'content',
      of: [
        defineArrayMember({name: 'text-cta', type: 'text-cta'}),
        defineArrayMember({name: 'featured-projects', type: 'featured-projects'}),
        defineArrayMember({name: 'divider', type: 'divider'}),
        defineArrayMember({name: 'accordion', type: 'accordion'}),
        defineArrayMember({name: 'cards', type: 'cards'}),
        defineArrayMember({name: 'awards', type: 'awards'}),
        // defineArrayMember({name: 'text-block', type: 'text-block'}),
      ],
    }),
    seo,
  ],
})
