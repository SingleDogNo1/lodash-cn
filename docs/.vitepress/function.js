import { genMenus, NODE_ENV } from './helper'

const titleDesc = {
  after: '执行n次后触发回调函数',
  ary: '将函数转换为可以接受多个参数的函数',
  before: '执行n次前触发回调函数',
  bind: '绑定函数到对象',
  bindKey: '绑定函数到对象',
  curry: '函数柯里化',
  curryRight: '函数柯里化',
  debounce: '防抖函数',
  defer: '延迟调用函数',
  delay: '延迟调用函数',
  flip: '翻转函数参数',
  memoize: '缓存函数',
  negate: '函数取反',
  once: '只能调用一次函数',
  overArgs: '包裹函数',
  partial: '预设函数参数',
  partialRight: '预设函数参数',
  rearg: '调整函数对应位置的参数',
  rest: '', // TODO:
  spread: '', // TODO:
  throttle: '节流函数',
  unary: '', // TODO:
  wrap: '' // TODO:
}

export function genFunctionMenu() {
  return [
    {
      text: '函数操作',
      collapsible: true,
      collapsed: NODE_ENV === 'dev',
      items: genMenus('Function', titleDesc)
    }
  ]
}
