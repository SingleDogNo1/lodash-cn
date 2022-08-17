# mapValues

::: tip 语法

_.mapValues(object, [iteratee=_.identity])

:::

## 描述

创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee调用三个参数： (value, key, object)。

## 参数

|   参数   |   类型   | 默认值 |     说明     |
| :------: | :------: | :----: | :----------: |
|  object  |  Object  |   -    | 要遍历的对象 |
| iteratee | Function |   -    |   迭代函数   |

## 返回值

+ Object: 返回映射后的新对象

## 示例

```js
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (不保证迭代顺序)

// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (不保证迭代顺序)
```
