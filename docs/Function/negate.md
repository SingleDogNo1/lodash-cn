# negate

::: tip 语法

_.negate(predicate)

:::

## 描述

创建一个针对断言函数 `func` 结果取反的函数。 `func` 断言函数被调用的时候，`this` 绑定到创建的函数，并传入对应参数。

## 参数

|    参数    |   类型   | 默认值 |              说明              |
| :--------: | :------: | :----: | :----------------------------: |
|    predicate    | Function |   -    |         需要对结果取反的函数         |

## 返回值

+ Function: 返回一个新的取反函数

## 示例

```js
function isEven(n) {
  return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
```
