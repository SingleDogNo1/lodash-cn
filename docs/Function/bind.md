# bind

::: tip 语法

_.bind(func, thisArg, [partials])

:::

## 描述

创建一个调用func的函数，thisArg绑定func函数中的 this (注：this的上下文为thisArg) ，并且func函数会接收partials附加参数。

`_.bind.placeholder`值默认是以 `_` 作为附加部分参数的占位符。

::: warning 注意

不同于原生的 Function 的 bind 方法，这个方法不会设置绑定函数的 "length" 属性。

:::

## 参数

| 参数  |   类型   | 默认值 |        说明         |
| :---: | :------: | :----: | :-----------------: |
| func  | Function |   -    |   绑定的函数    |
|   thisArg   |  any  |   -    | func 绑定的this对象 |
|   partials   |  ...any  |   -    | 附加的部分参数 |

## 返回值

+ Function: 返回新的绑定函数

## 示例

```js
var greet = function(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// Bound with placeholders.
var bound = _.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```
