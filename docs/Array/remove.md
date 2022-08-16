# remove

::: tip 语法

_.remove(array, [predicate=_.identity])

:::

## 描述

移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。

::: warning 注意
<!-- TODO Collection/filter -->
<!-- 和[`_.filter`](/Collection/filter)方法不同，该方法会改变原数组。使用[`_.pull`](/Array/pull)来根据提供的value值从数组中移除元素。 -->
和`_.filter`方法不同，该方法会改变原数组。使用[`_.pull`](/Array/pull)来根据提供的value值从数组中移除元素。

:::

## 参数

|   参数    |                类型                | 默认值 |        说明        |
| :-------: | :--------------------------------: | :----: | :----------------: |
|   array   |               Array                |   -    |    要修改的数组    |
| predicate | Array / Function / Object / string |   -    | 每次迭代调用的函数 |

## 返回值

+ array(Array): 返回移除元素组成的新数组

## 示例

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
