// import { menu } from './helper'

function genGuideMenu() {
  return [
    {
      text: '写在前面',
      items: [
        {
          text: '简介',
          link: '/guide'
        }
      ]
    }
  ]
}

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
        },
        {
          text: 'join -- 转字符串',
          link: '/Array/join'
        },
        {
          text: 'last -- 获取最后一个元素',
          link: '/Array/last'
        },
        {
          text: 'lastIndexOf -- 获取元素索引值',
          link: '/Array/lastIndexOf'
        },
        {
          text: 'nth -- 获取第 n 个元素',
          link: '/Array/nth'
        },
        {
          text: 'pull -- 删除数组中的元素',
          link: '/Array/pull'
        },
        {
          text: 'pullAll -- 删除数组中的元素',
          link: '/Array/pullAll'
        },
        {
          text: 'pullAllBy -- 删除数组中的元素',
          link: '/Array/pullAllBy'
        },
        {
          text: 'pullAllWith -- 删除数组中的元素',
          link: '/Array/pullAllWith'
        },
        {
          text: 'pullAt -- 删除数组中的元素',
          link: '/Array/pullAt'
        },
        {
          text: 'remove -- 删除数组中的元素',
          link: '/Array/remove'
        },
        {
          text: 'reverse -- 反转数组',
          link: '/Array/reverse'
        },
        {
          text: 'slice -- 截取数组',
          link: '/Array/slice'
        },
        {
          text: 'sortedIndex -- 获取索引值',
          link: '/Array/sortedIndex'
        },
        {
          text: 'sortedIndexBy -- 获取索引值',
          link: '/Array/sortedIndexBy'
        },
        {
          text: 'sortedIndexOf -- 获取索引值',
          link: '/Array/sortedIndexOf'
        },
        {
          text: 'sortedLastIndex -- 获取索引值',
          link: '/Array/sortedLastIndex'
        },
        {
          text: 'sortedLastIndexBy -- 获取索引值',
          link: '/Array/sortedLastIndexBy'
        },
        {
          text: 'sortedLastIndexOf -- 获取索引值',
          link: '/Array/sortedLastIndexOf'
        },
        {
          text: 'sortedUniq -- 数组去重',
          link: '/Array/sortedUniq'
        },
        {
          text: 'sortedUniqBy -- 数组去重',
          link: '/Array/sortedUniqBy'
        },
        {
          text: 'tail -- 截取数组',
          link: '/Array/tail'
        },
        {
          text: 'take -- 截取数组',
          link: '/Array/take'
        },
        {
          text: 'takeRight -- 截取数组',
          link: '/Array/takeRight'
        },
        {
          text: 'takeRightWhile -- 截取数组',
          link: '/Array/takeRightWhile'
        },
        {
          text: 'takeWhile -- 截取数组',
          link: '/Array/takeWhile'
        },
        {
          text: 'union -- 数组合并',
          link: '/Array/union'
        },
        {
          text: 'unionBy -- 数组合并',
          link: '/Array/unionBy'
        },
        {
          text: 'unionWith -- 数组合并',
          link: '/Array/unionWith'
        },
        {
          text: 'uniq -- 数组去重',
          link: '/Array/uniq'
        },
        {
          text: 'uniqBy -- 数组去重',
          link: '/Array/uniqBy'
        },
        {
          text: 'uniqWith -- 数组去重',
          link: '/Array/uniqWith'
        },
        {
          text: 'unzip -- 数组重组',
          link: '/Array/unzip'
        },
        {
          text: 'unzipWith -- 数组重组',
          link: '/Array/unzipWith'
        },
        {
          text: 'without -- 数组过滤',
          link: '/Array/without'
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

const sidebar = [...genGuideMenu(), ...genArrayMenu(), ...genCollectionMenu()]
const nav = [...genArrayMenu(), ...genCollectionMenu()]

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
      '/Collection/': sidebar
    }
  }
}
