// schemas/seo.js

export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  group: 'seo',
  options: {
    collapsible: true,
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'The title of the page that appears in search engine results',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      description: 'The description of the page that appears in search engine results',
    },
    {
      title: 'Meta Keywords',
      name: 'metaKeywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'A list of comma-separated keywords that describe the page',
    },
    {
      title: 'Meta Image',
      name: 'metaImage',
      type: 'image',
      description:
        'The image that appears in search engine results or when sharing on social media platforms',
    },
  ],
}
