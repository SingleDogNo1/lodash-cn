import { genGuideMenu, genArrayMenu, genCollectionMenu, genDateMenu } from './helper'

function genFunctionMenu() {
  return [
    {
      text: '函数操作',
      collapsible: true,
      items: [
        {
          text: 'after -- 执行n次后触发回调函数',
          link: '/Function/after'
        },
        {
          text: 'ary -- 将函数转换为可以接受多个参数的函数',
          link: '/Function/ary'
        },
        {
          text: 'before -- 执行n次前触发回调函数',
          link: '/Function/before'
        },
        {
          text: 'bind -- 绑定函数到对象',
          link: '/Function/bind'
        },
        {
          text: 'bindKey -- 绑定函数到对象',
          link: '/Function/bindKey'
        },
        {
          text: 'curry -- 函数柯里化',
          link: '/Function/curry'
        },
        {
          text: 'curryRight -- 函数柯里化',
          link: '/Function/curryRight'
        },
        {
          text: 'debounce -- 防抖函数',
          link: '/Function/debounce'
        },
        {
          text: 'defer -- 延迟调用函数',
          link: '/Function/defer'
        },
        {
          text: 'delay -- 延迟调用函数',
          link: '/Function/delay'
        },
        {
          text: 'flip -- 翻转函数参数',
          link: '/Function/flip'
        },
        {
          text: 'memoize --缓存函数',
          link: '/Function/memoize'
        },
        {
          text: 'negate -- 函数取反',
          link: '/Function/negate'
        },
        {
          text: 'once -- 只能调用一次函数',
          link: '/Function/once'
        },
        {
          text: 'overArgs -- 包裹函数',
          link: '/Function/overArgs'
        },
        {
          text: 'partial -- 预设函数参数',
          link: '/Function/partial'
        }
      ]
    }
  ]
}

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

const sidebar = [
  ...genGuideMenu(),
  ...genArrayMenu(),
  ...genCollectionMenu(),
  ...genDateMenu(),
  ...genObjectMenu(),
  ...genFunctionMenu()
]
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
    // nav,
    sidebar: {
      '/guide': sidebar,
      '/Array/': sidebar,
      '/Collection/': sidebar,
      '/Date/': sidebar,
      '/Function/': sidebar,
      '/Object/': sidebar
    }
  }
}
