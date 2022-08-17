import { genGuideMenu, genArrayMenu } from './helper'

function genCollectionMenu() {
  return [
    {
      text: '集合操作',
      collapsible: true,
      items: [
        {
          text: 'countBy -- 获取集合中 key 出现的次数',
          link: '/Collection/countBy'
        },
        {
          text: 'each -- 遍历数组或对象',
          link: '/Collection/each'
        },
        {
          text: 'eachRight -- 遍历数组或对象',
          link: '/Collection/eachRight'
        },
        {
          text: 'every -- 判断数组或对象是否都满足条件',
          link: '/Collection/every'
        },
        {
          text: 'filter -- 过滤数组或对象',
          link: '/Collection/filter'
        },
        {
          text: 'find -- 查找数组或对象',
          link: '/Collection/find'
        },
        {
          text: 'findLast -- 查找数组或对象',
          link: '/Collection/findLast'
        },
        {
          text: 'flatMap -- 创建同阶数组',
          link: '/Collection/flatMap'
        },
        {
          text: 'flatMapDeep -- 创建同阶数组',
          link: '/Collection/flatMapDeep'
        },
        {
          text: 'flatMapDepth -- 创建同阶数组',
          link: '/Collection/flatMapDepth'
        },
        {
          text: 'forEach -- 遍历数组或对象',
          link: '/Collection/forEach'
        },
        {
          text: 'forEachRight -- 遍历数组或对象',
          link: '/Collection/forEachRight'
        },
        {
          text: 'groupBy -- 分组',
          link: '/Collection/groupBy'
        },
        {
          text: 'includes -- 判断数组或对象是否包含指定值',
          link: '/Collection/includes'
        },
        {
          text: 'invokeMap -- 调用数组或对象的方法',
          link: '/Collection/invokeMap'
        },
        {
          text: 'keyBy -- 根据指定值分组',
          link: '/Collection/keyBy'
        },
        {
          text: 'map -- 创建新数组',
          link: '/Collection/map'
        },
        {
          text: 'orderBy -- 排序',
          link: '/Collection/orderBy'
        },
        {
          text: 'partition -- 数组或对象断言分组',
          link: '/Collection/partition'
        },
        {
          text: 'reduce -- 数组或对象迭代累加',
          link: '/Collection/reduce'
        },
        {
          text: 'reduceRight -- 数组或对象迭代累加',
          link: '/Collection/reduceRight'
        },
        {
          text: 'reject -- filter 的反向操作',
          link: '/Collection/reject'
        },
        {
          text: 'sample -- 随机获取数组或对象中的一个元素',
          link: '/Collection/sample'
        },
        {
          text: 'sampleSize -- 随机获取数组或对象中的一些元素',
          link: '/Collection/sampleSize'
        },
        {
          text: 'shuffle -- 打乱数组或对象',
          link: '/Collection/shuffle'
        },
        {
          text: 'size -- 获取数组或对象的长度',
          link: '/Collection/size'
        },
        {
          text: 'some -- 判断数组或对象是否至少有一个满足条件',
          link: '/Collection/some'
        },
        {
          text: 'sortBy -- 数组或对象排序',
          link: '/Collection/sortBy'
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

const sidebar = [...genGuideMenu(), ...genArrayMenu(), ...genCollectionMenu(), ...genObjectMenu()]
const nav = [...genArrayMenu(), ...genCollectionMenu(), ...genObjectMenu()]

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
    nav,
    sidebar: {
      '/guide': sidebar,
      '/Array/': sidebar,
      '/Collection/': sidebar,
      '/Object/': sidebar
    }
  }
}
