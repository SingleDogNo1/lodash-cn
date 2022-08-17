# sampleSize

::: tip 语法

_.sampleSize(collection, [n=1])

:::

## 描述

从collection（集合）中获得 n 个随机元素。

## 参数

|    参数    |      类型      | 默认值 |      说明      |
| :--------: | :------------: | :----: | :------------: |
| collection | Array / Object |   -    |  要取样的集合  |
|     n      |     number     |   -    | 取样的元素个数 |

## 返回值

+ Array: 返回 n 个元素组成的数组

## 示例

```js
_.sampleSize([1, 2, 3], 2);
// => [3, 1]

_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```
