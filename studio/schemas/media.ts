export default {
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
}
