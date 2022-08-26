import { genMenus, NODE_ENV } from './helper'

const titleDesc = {
  countBy: '获取集合中 key 出现的次数',
  each: '遍历数组或对象',
  eachRight: '遍历数组或对象',
  every: '判断数组或对象是否都满足条件',
  filter: '过滤数组或对象',
  find: '查找数组或对象',
  findLast: '查找数组或对象',
  flatMap: '创建同阶数组',
  flatMapDeep: '创建同阶数组',
  flatMapDepth: '创建同阶数组',
  forEach: '遍历数组或对象',
  forEachRight: '遍历数组或对象',
  groupBy: '分组',
  includes: '判断数组或对象是否包含指定值',
  invokeMap: '调用数组或对象的方法',
  keyBy: '根据指定值分组',
  map: '创建新数组',
  orderBy: '排序',
  partition: '数组或对象断言分组',
  reduce: '数组或对象迭代累加',
  reduceRight: '数组或对象迭代累加',
  reject: 'filter 的反向操作',
  sample: '随机获取数组或对象中的一个元素',
  sampleSize: '随机获取数组或对象中的一些元素',
  shuffle: '打乱数组或对象',
  size: '获取数组或对象的长度',
  some: '判断数组或对象是否至少有一个满足条件',
  sortBy: '数组或对象排序'
}

export function genCollectionMenu() {
  return [
    {
      text: '集合操作',
      collapsible: true,
      collapsed: NODE_ENV === 'dev',
      items: genMenus('Collection', titleDesc)
    }
  ]
}
