import { menu } from './helper'

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
        link: 'https://github.com/lost-dream/icmes-web'
      }
    ],
    editLink: {
      pattern: 'https://github.com/lost-dream/icmes-web/edit/main/docs/src/:path' // github
    },
    nav: menu,
    sidebar: {
      '/Array/': menu,
      '/Collection/': menu
    }
  }
}
