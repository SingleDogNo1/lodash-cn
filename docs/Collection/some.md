# some

::: tip 语法

_.some(collection, [predicate=_.identity])

:::

## 描述

通过predicate（断言函数） 检查collection（集合）中的元素是否存在任意truthy（真值）的元素，一旦predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。

## 参数

|    参数    |                类型                | 默认值 |      说明      |
| :--------: | :--------------------------------: | :----: | :------------: |
| collection |           Array / Object           |   -    | 用来迭代的集合 |
| predicate  | Array / Function / Object / string |   -    | 迭代调用的函数 |

## 返回值

+ boolean: 如果任意元素经 predicate 检查为 truthy（真值），返回 true ，否则返回 false 。

## 示例

```js
_.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

// The `_.matches` iteratee shorthand.
_.some(users, { 'user': 'barney', 'active': false });
// => false

// The `_.matchesProperty` iteratee shorthand.
_.some(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
_.some(users, 'active');
// => true
```
