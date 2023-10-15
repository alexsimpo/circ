// schemas/link.js

interface Link {
  title: string
  url: string
  slug: string
}

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'URL',
    },
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{type: 'page'}, {type: 'project'}],
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
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
}
