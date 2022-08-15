# findIndex

::: tip 语法

_.findIndex(array, [predicate=_.identity], [fromIndex=0])

:::

## 描述

<!-- TODO Collection/find -->
这个方法l类似于[`_.find`](/Collection/find)，但是只是返回满足迭代器查询到第一次的索引值。

## 参数

|   参数    |   类型   | 默认值 |       说明       |
| :-------: | :------: | :----: | :--------------: |
|   array   |  Array   |   -    |  需要检索的数组  |
| predicate | Function |   -    |      迭代器      |
| fromIndex |  number  |   -    | 开始搜索的索引值 |

## 返回值

+ number (number): 返回查找到的元素索引值，未找到返回 -1。

## 示例

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```
