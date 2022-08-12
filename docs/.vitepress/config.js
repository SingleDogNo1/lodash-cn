// import { menu } from './helper'

function genArrayMenu() {
  return [
    {
      text: '数组操作',
      items: [
        {
          text: 'chunk -- 数组分块',
          link: '/Array/chunk'
        },
        {
          text: 'compact -- 过滤假值',
          link: '/Array/compact'
        }
      ]
    }
  ]
}

function genCollectionMenu() {
  return [
    {
      text: '集合操作',
      items: [
        {
          text: 'countBy',
          link: '/Collection/countBy'
        }
      ]
    }
  ]
}

const menu = [...genArrayMenu(), ...genCollectionMenu()]

export default {
  title: 'Lodash',
  description: 'Lodash 中文文档',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Lodash',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lost-dream/lodash-cn'
      }
    ],
    editLink: {
      pattern: 'https://github.com/lost-dream/lodash-cn/edit/main/docs/:path'
    },
    nav: menu,
    sidebar: {
      '/Array/': menu,
      '/Collection/': menu
    }
  }
}
