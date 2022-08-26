import { genMenus, NODE_ENV } from './helper'

const titleDesc = {
  now: '获取时间戳',
  compact: '过滤假值'
}

export function genDateMenu() {
  return [
    {
      text: '日期操作',
      collapsible: true,
      collapsed: NODE_ENV === 'dev',
      items: genMenus('Date', titleDesc)
    }
  ]
}
