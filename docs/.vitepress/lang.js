import { genMenus, NODE_ENV } from './helper'

const titleDesc = {
  castArray: '强转成数组',
  clone: '数据的浅克隆',
  cloneDeep: '数据的深克隆',
  cloneDeepWith: '数据的深克隆',
  cloneWith: '数据的浅克隆',
  conformsTo: '对象断言判断',
  eq: '两值是否相等',
  gt: '是否大于某值',
  gte: '是否大于等于某值',
  isArguments: '是否是arguments对象',
  isArray: '是否是数组',
  isArrayBuffer: '是否是ArrayBuffer对象',
  isArrayLike: '是否是类数组',
  isArrayLikeObject: '是否是类对象数组',
  isBoolean: '是否是boolean类型',
  isBuffer: '是否是个 buffer',
  isDate: '是否是Date对象',
  isElement: '是否是DOM元素',
  isEmpty: '是否为空',
  isEqual: '两值是否相等',
  isEqualWith: '两值是否相等',
  isError: '是否是Error相关对象',
  isFinite: '是否是有限数值',
  isFunction: '是否是Function对象',
  isInteger: '是否是整数',
  isLength: '是否为有效的类数组长度',
  isMap: '是否是Map对象',
  isMatch: '是否匹配给定的值',
  isMatchWith: '是否匹配给定值',
  isNaN: '是否是NaN值',
  isNative: '是否是原生函数',
  isNil: '是否是null或者undefined',
  isNull: '是否为null',
  isNumber: '是否是数值',
  isObject: '是否是对象',
  isObjectLike: '是否是类对象',
  isPlainObject: '是否是普通对象',
  isRegExp: '是否为RegExp对象',
  isSafeInteger: '是否是安全整数',
  isSet: '是否为Set对象',
  isString: '是否为字符串',
  isSymbol: '是否为Symbol对象',
  isTypedArray: '是否为是否是TypedArray对象',
  isUndefined: '是否为undefined',
  isWeakMap: '是否为WeakMap对象',
  isWeakSet: '是否为WeakSet对象',
  lt: '两值比较小于',
  lte: '两值比较小于等于',
  toArray: '强转为数组',
  toFinite: '强转为有限数字',
  toInteger: '强转为整数',
  toLength: '强转为整数',
  toNumber: '强转为数字',
  toPlainObject: '强转为普通对象',
  toSafeInteger: '强转为安全整数',
  toString: '强转为字符串'
}

export function genLangMenu() {
  return [
    {
      text: '类型转换 & 类型判断操作',
      collapsible: true,
      collapsed: NODE_ENV === 'dev',
      items: genMenus('Lang', titleDesc)
    }
  ]
}