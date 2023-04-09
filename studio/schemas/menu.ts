// schemas/menus.js
import {PlayIcon} from '@sanity/icons'

export default {
  name: 'menu',
  type: 'document',
  title: 'All Menus',
  icon: PlayIcon,
  groups: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'copyright',
      title: 'Copyright',
    },
    {
      name: 'social',
      title: 'Social',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'All Menus',
      hidden: true,
    },
    {
      name: 'headerMenu',
      type: 'array',
      title: 'Header Menu',
      of: [{type: 'link'}],
      group: 'header',
    },
    {
      name: 'footerMenu',
      type: 'array',
      title: 'Footer Menu',
      of: [{type: 'link'}],
      group: 'footer',
    },
    {
      name: 'copyright',
      type: 'array',
      title: 'Copyright',
      of: [{type: 'link'}],
      group: 'copyright',
    },
    {
      name: 'socialMenu',
      type: 'array',
      title: 'Social Menu',
      group: 'social',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
            },
            {
              name: 'link',
              type: 'link',
              title: 'Link',
            },
          ],
        },
      ],
    },
  ],
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'], // add or remove additional actions
  defaultLayout: [
    {
      name: 'menu',
      component: 'default',
      title: 'Menus',
      options: {
        // add this option to auto-select the first menus document
        defaultItem: 'first',
      },
    },
  ],
}
