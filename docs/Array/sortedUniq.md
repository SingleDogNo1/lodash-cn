# sortedUniq

::: tip 语法

_.sortedUniq(array)

:::

## 描述

这个方法类似[`_.uniq`](/Array/uniq)，除了它会优化排序数组。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 要检查的数组 |

## 返回值

+ array(Array): 返回一个新的不重复的数组

## 示例

```js
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```
