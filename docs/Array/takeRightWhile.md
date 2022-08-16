# takeRightWhile

::: tip 语法

_.takeRightWhile(array, [predicate=_.identity])

:::

## 描述

从array数组的最后一个元素开始提取元素，直到 predicate（断言） 返回假值。predicate 会传入三个参数： (value, index, array)。

## 参数

|   参数    |                类型                | 默认值 |     说明     |
| :-------: | :--------------------------------: | :----: | :----------: |
|   array   |               Array                |   -    | 要检索的数组 |
| predicate | Array / Function / Object / string |   -    |    迭代器    |

## 返回值

+ array(Array): 返回 array 数组的切片

## 示例

```js
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

_.takeRightWhile(users, function(o) { return !o.active; });
// => [{ user: 'fred', active: false }, { user: 'pebbles', active: false }]

// The `_.matches` iteratee shorthand.
_.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => [{ user: 'pebbles', active: false }]

// The `_.matchesProperty` iteratee shorthand.
_.takeRightWhile(users, ['active', false]);
// => [{ user: 'fred', active: false }, { user: 'pebbles', active: false }]

// The `_.property` iteratee shorthand.
_.takeRightWhile(users, 'active');
// => []
```
