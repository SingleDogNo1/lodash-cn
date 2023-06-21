# gt

::: tip 语法

_.gt(value, other)

:::

## 描述

检查`value`是否大于`other`。

## 参数

|  参数  | 类型  | 默认值 |       说明       |
| :----: | :---: | :----: | :--------------: |
| value  |  any  |   -    |    要比较的值    |
| other |  any  |   -    | 另一个要比较的值 |

## 返回值

+ boolean: 如果`value`大于`other` ，返回 `true`，否则 `false`。

## 示例

```js
_.gt(3, 1);
// => true

_.gt(3, 3);
// => false

_.gt(1, 3);
// => false

```
