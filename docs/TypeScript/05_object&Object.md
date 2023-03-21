# object&Object

## object

object 代表的是对象类型,也可以是构造函数创建出来的对象

```ts
let arr: object = []
let obj: object = {}
let fn:object = () => {}
let fn2:object = function () {}

let arr1: object = new Array
let obj: object = new Object
let fn:object = new Function
```
## Object

Object 代表的是被构造函数所创建出来的对象

```ts
let arr1: Object = new Array
let obj: Object = new Object
let fn:Object = new Function
let date: Object = new Date()
```

只要顶层是用 new Object 创造出来的都可以被Object所约束
```ts
let num:Object = new Number()
let str: Object = new String()
let boolean:Object = new Boolean()
```

大写的构造函数类型约束可以约束字面量形式和构造函数形式

```ts
let str: String = '123'
let str2: String = new String('123')
```

