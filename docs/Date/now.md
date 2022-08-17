# now

::: tip 语法

_.now()

:::

## 描述

获得 `1970-01-01 00:00:00 UTC`到现在的毫秒数

## 返回值

+ number: 返回当前时间戳

## 示例

```js
_.defer(function(stamp) {
  console.log(_.now() - stamp);
}, _.now());
// => 记录延迟函数调用的毫秒数
```
