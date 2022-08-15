// import { menu } from './helper'

function genArrayMenu() {
  return [
    {
      text: '数组操作',
      collapsible: true,
      items: [
        {
          text: 'chunk -- 数组分块',
          link: '/Array/chunk'
        },
        {
          text: 'compact -- 过滤假值',
          link: '/Array/compact'
        },
        {
          text: 'concat -- 连接',
          link: '/Array/concat'
        },
        {
          text: 'difference -- 过滤值',
          link: '/Array/difference'
        },
        {
          text: 'differenceBy -- 过滤值',
          link: '/Array/differenceBy'
        },
        {
          text: 'differenceWith -- 过滤值',
          link: '/Array/differenceWith'
        },
        {
          text: 'drop -- 删除开头的元素',
          link: '/Array/drop'
        },
        {
          text: 'dropRight -- 删除末尾的元素',
          link: '/Array/dropRight'
        },
        {
          text: 'dropRightWhile -- 根据条件删除末尾的元素',
          link: '/Array/dropRightWhile'
        },
        {
          text: 'dropWhile -- 根据条件删除开头的元素',
          link: '/Array/dropWhile'
        },
        {
          text: 'fill -- 填充数组',
          link: '/Array/fill'
        },
        {
          text: 'findIndex -- 查找元素索引',
          link: '/Array/findIndex'
        },
        {
          text: 'findLastIndex -- 查找元素索引',
          link: '/Array/findLastIndex'
        },
        {
          text: 'first -- 获取第一个元素',
          link: '/Array/first'
        },
        {
          text: 'flatten -- 减少一层嵌套',
          link: '/Array/flatten'
        },
        {
          text: 'flattenDeep -- 降为一维数组',
          link: '/Array/flattenDeep'
        },
        {
          text: 'flattenDepth -- 减少 depth 层嵌套',
          link: '/Array/flattenDepth'
        },
        {
          text: 'fromPairs -- 返回键值对对象',
          link: '/Array/fromPairs'
        },
        {
          text: 'head -- 获取第一个元素',
          link: '/Array/head'
        },
        {
          text: 'indexOf -- 获取元素索引值',
          link: '/Array/indexOf'
        },
        {
          text: 'initial -- 去除最后一个元素',
          link: '/Array/initial'
        },
        {
          text: 'intersection -- 数组交集',
          link: '/Array/intersection'
        },
        {
          text: 'intersectionBy -- 数组交集',
          link: '/Array/intersectionBy'
        },
        {
          text: 'intersectionWith -- 数组交集',
          link: '/Array/intersectionWith'
        }
      ]
    }
  ]
}

function genCollectionMenu() {
  return [
    {
      text: '集合操作',
      collapsible: true,
      items: [
        {
          text: 'countBy -- 获取迭代处理中 key 出现的次数',
          link: '/Collection/countBy'
        }
      ]
    }
  ]
}

const menu = [...genArrayMenu(), ...genCollectionMenu()]

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
    nav: menu,
    sidebar: {
      '/Array/': menu,
      '/Collection/': menu
    }
  }
}
