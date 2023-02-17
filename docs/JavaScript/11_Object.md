# 对象

### 1. 对象的创建方式

1. let obj = {}

```js
let obj = {
    name: 'zs'
    age: 18
}
console.log(obj) // {name: 'zs', age:18}
```

2. new Object

```js
let obj = new Object({name: 'zs'})
console.log(obj); //{name: 'zs'}
```

3. 构造函数

```
function User(name) {
	this.name = name
	return this
}
let zs = new User('zs')
console.log(zs) // {name: 'zs'}
```

### 2. 对象的增删改查

```js
let obj = {
    name: 'zs',
    age:18
}
obj.name || obj['name'] // zs
obj.name = 'ls' // {name: 'ls', age: 18}
delete obj.name // {age: 18}
```

### 3. 对象的展开和解构与合并

1.  ...语法

```js
let obj = {name: 'zs', age: 18}
let newObj = {...obj, hobby:'ppb'}
console.log(newObj) // {name: 'zs', age: 18, hobby:'ppb'}
```

2. assign

```js
let obj = {name: 'zs', age: 18}
let newObj = assign({name: 'zs', age: 18}, {hobby:'ppb'})
console.log(newObj) // {name: 'zs', age: 18, hobby:'ppb'}
```

3. 解构

```
let obj = {name: 'zs', age: 18}
let {name, age} = obj
console.log(name, age) // zs 18
```

4. 默认值

```js
let obj = {name: 'zs', age: 18}
let {name, age, hobby='ppb'} = obj
console.log(name, age) // zs 18 ppb
```

### 4. 深拷贝和浅拷贝

1. 浅拷贝

> 浅拷贝：对象只拷贝第一层数据，第一层以上的数据引用地址

2. 深拷贝

> 深拷贝：任一层数据都是新的地址

```js
let obj = {
    name: 'zs',
    hobby: ['ppb', 'lq', 'ymq'],
    friend: {
        name: 'ls',
        age: 19
    }
}
function deepCopy(obj) {
    let newData = obj instanceof Array ? [] : {}
    let newValue = {}
    for (const key in obj) {
        let value = obj[key]
        newValue[key] = typeof value === 'object' ? deepCopy(value) : value
    }
    return newValue
}
let newObj = deepCopy(obj)
newObj.friend.name = 'ww'
console.log(obj);
//friend: {name: 'ls', age: 19}
//hobby: (3) ['ppb', 'lq', 'ymq']
//name: "zs"
console.log(newObj);
//friend: {name: 'ww', age: 19}
//hobby: {0: 'ppb', 1: 'lq', 2: 'ymq'}
//name: "zs"
```

### 5. 判断属性是否在对象上

1. obj.hasOwnProperty()

```js
let obj = {name: 'zs', age: 18}
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false
```

> 该方法有2个缺点
>
> 1. 对象原型链上的属性和方法会返回false
> 2. 用create创建的属性返回false

```js
let obj = Object.create(null)
obj.name = 'zs'
console.log(obj.hasOwnProperty('name'));
// 报错Uncaught TypeError: obj.hasOwnProperty is not a function
```

> 解决报错问题的话可以使用Object.Prototype.hasOwnProperty

2. Reflect.has和in操作符

```js
let obj = {name: 'zs'}
console.log('name' in obj) // true
console.log('toString' in obj) // true

console.log(Reflect.has(obj, 'name')) // true
console.log(Reflect.has(obj, 'toString')) // true
```

3. Object.hasOwn

```js
let obj = {name: 'zs'}
console.log(Object.hasOwn(obj, 'name')); //true
console.log(Object.hasOwn(obj, 'toString')); // false
```

### 6. 对象的遍历循环

1. Object.keys(obj)
2. Object.values(obj)
3. Object.entries(obj)
4. for in

```js
let obj = {name: 'zs', age: 18}
console.log(Object.keys(obj)); //['name', 'age']
console.log(Object.values(obj)); // ['zs', 18]
console.log(Object.entries(obj)); // ['name', 'zs'] ['age', 18]
for (const key in Object.keys(obj)) {
    console.log(key);
}
```

### 7. 对象的描述属性查看修改和保护

1. Object.getOwnPropertyDescriptor() 

```js
let obj = {name: 'zs', age: 18}
console.log(
JSON.stringfiy(Object.getOwnPropertyDescriptor(obj, 'name'), null, 2)
)
//{
//  "value": "zs",
//  "writable": true, 是否可重写
//  "enumerable": true, 是否可被枚举
//  "configurable": true 是否可配置
//}
 
//获取多个属性
getOwnPropertyDescriptors(obj)
```

2. Object.seal 和 Object.freeze

```js
let obj = {name: 'zs', age: 18}
Object.seal(obj)
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'name'), null, 2)
);
//{
//  "value": "zs",
//  "writable": true, 是否可重写
//  "enumerable": true, 是否可被枚举
//  "configurable": false 是否可配置
//}

let obj = {name: 'zs', age: 18}
Object.freeze(obj)
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'name'), null, 2)
);
//{
//  "value": "zs",
//  "writable": false, 是否可重写
//  "enumerable": true, 是否可被枚举
//  "configurable": false 是否可配置
//}
```

### 8. 改变对象描述属性配置和对象代理

1. defineProperty 

```js
let obj = {name: 'zs', age: 18}
Object.defineProperty(obj, 'age', {
    enumerable: false,
    get() {
        return 99
    }
    set(value) {
    return this.age = value
}
})
console.log(obj.age); // 99
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'age'), null, 2)
);
//{
//  "enumerable": false,
//  "configurable": true
//}
```

2. proxy

```js
let obj = {name: 'zs', age: 18}
let proxy = new Proxy(obj, {
    get(target, value, proxyTarget) {
        console.log(target, value, proxyTarget);
        return target[value]
    },
    set(target, value, newValue, proxyTarget) {
        console.log(target, value, newValue, proxyTarget);
        return target[value] = newValue
    }
})
console.log(proxy.name);
console.log(proxy.name = 'ls');
```

> defineProperty 和 proxy的区别
>
> defineProperty需要指定具体的属性，而proxy则不需要

### 9. 访问器

```js
let obj = {
    name: 'zs', 
    age: 18, 
    get name() {
    	console.log(11);
	}
    set name(val) {
        return this.name = val
    }
}
console.log(obj.name); // 11
```

> 当访问该对象时优先访问该对象，目的是不让外部轻易的改变对象的属性

### 10. JSON

> **JSON语言是所有计算机都认识的语言，将某一个语言通过JSON转化传递给其他语言就能识别，也可以将其他语言传递过来的数据进行JSON转化被本语言识别**

1. JSON.stringify()

> 将JS数据转化为字符串

```js
let obj = {name: 'zs', age: 18}
JSON.stringify(obj) // {"name": "zs", "age": 18}

// 第二个参数为配置项
let obj = {name: 'zs', age: 18}
console.log(JSON.stringify(obj, ['name']));{"name": "zs"}

//第三个参数为序列化格式,填写2表示转化出来的数据前面空2行
```

2. toJSON

> 表示对转化的对象进行自定义

```js
let obj = {
    name: 'zs', 
    age: 18,
    toJSON() {
        return {
            title: this.name
        }
    }
}
console.log(JSON.stringify(obj)); //{"title":"zs"}
```

3. JSON.parse()

> 将JSON数据转化为JS对象

```js
let obj = {"name": "zs", "age": 18}
JSON.parse(obj) // {name: 'zs', age: 18}
```
