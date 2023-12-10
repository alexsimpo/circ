import {PlayIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const category = {
  name: 'category',
  type: 'document',
  title: 'Categories',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
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
      name: 'color',
      title: 'Color',
      type: 'simplerColor', // or textColor or highlightColor
      options: {
        colorList: [{label: 'Custom...', value: 'custom'}],
      },
    }),
  ],
}
