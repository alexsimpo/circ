// schemas/seo.js

const paddingSizes = [
  {title: 'None', value: 'none'},
  {title: 'Medium', value: 'md'},
  {title: 'Large (Default)', value: '2xl'},
]

export const columns = [
  {title: '1', value: '12'},
  {title: '2', value: '6'},
  {title: '3', value: '4'},
  {title: '4', value: '3'},
  {title: '6', value: '2'},
]

export default {
  name: 'display',
  type: 'object',
  title: 'Display',
  group: 'display',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'padding',
      title: 'Padding',
      type: 'string',
      options: {
        list: paddingSizes,
        layout: 'dropdown',
      },
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: columns,
        layout: 'dropdown',
      },
    },
  ],
}
