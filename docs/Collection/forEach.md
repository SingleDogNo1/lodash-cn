# forEach

::: tip 语法

_.forEach(collection, [iteratee=_.identity])

:::

## 描述

调用iteratee遍历collection(集合) 中的每个元素， iteratee 调用3个参数：(value, index|key, collection)。 如果迭代函数（iteratee）显式的返回false，迭代会提前退出。

::: warning 注意

<!-- TODO forIn forOwn -->
<!-- 注意:与其他集合方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用[`_.forIn`](/Object/forIn)或者[`_.forOwn`](/Object/forOwn)代替。 -->
注意:与其他集合方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用`_.forIn`或者`_.forOwn`代替。

:::

## 别名

`_.each`

## 参数

|    参数    |      类型      | 默认值 |        说明        |
| :--------: | :------------: | :----: | :----------------: |
| collection | Array / Object |   -    | 一个用来迭代的集合 |
|  iteratee  |    Function    |   -    |      迭代函数      |

## 返回值

+ any(any): 返回集合

## 示例

```js
_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
