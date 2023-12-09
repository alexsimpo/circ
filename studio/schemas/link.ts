import {defineType, defineField} from 'sanity'

interface Link {
  title: string
  url: string
  slug: string
}

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{type: 'page'}, {type: 'project'}],
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      url: 'url',
      slug: 'reference.slug.current',
    },
    prepare({title, url, slug}: Link) {
      return {
        title: title || slug || url,
        subtitle: title ? `Link to: ${title}` : `URL: ${url}`,
      }
    },
  },
})
