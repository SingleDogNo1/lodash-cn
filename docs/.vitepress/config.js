import { genGuideMenu, genArrayMenu, genCollectionMenu, genDateMenu } from './helper'



function genObjectMenu() {
  return [
    {
      text: '对象操作',
      collapsible: true,
      items: [
        {
          text: 'mapValues',
          link: '/Object/mapValues'
        }
      ]
    }
  ]
}

const sidebar = [...genGuideMenu(), ...genArrayMenu(), ...genCollectionMenu(), ...genDateMenu(), ...genObjectMenu()]
// const nav = [...genArrayMenu(), ...genCollectionMenu(), ...genObjectMenu()]

export default {
  outDir: '../dist',
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
    sidebar: {
      '/guide': sidebar,
      '/Array/': sidebar,
      '/Collection/': sidebar,
      '/Date/': sidebar,
      '/Object/': sidebar
    }
  }
}
