# castArray

::: tip 语法

_.castArray(value)

:::

## 描述

如果 value 不是数组, 那么强制转为数组。

## 参数

| 参数  | 类型  | 默认值 |    说明    |
| :---: | :---: | :----: | :--------: |
| value |  any  |   -    | 要处理的值 |

## 返回值

+ Array: 返回转换后的数组

## 示例

```js
_.castArray(1);
// => [1]

_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]

_.castArray('abc');
// => ['abc']

_.castArray(null);
// => [null]

_.castArray(undefined);
// => [undefined]

_.castArray();
// => []

var array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true
```
