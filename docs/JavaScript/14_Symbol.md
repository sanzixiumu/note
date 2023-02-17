# Symbol

### 1. 特点

> **Symbol会生成永不重复的字符串**

### 2. 创建Symbol

```js
let symbol = Symbol()
console.log(symbol) // Symbol()
```

### 3. 添加描述

1. **传入添加**

```js
let symbol = Symbol('这是一个描述')
console.log(symbol) // Symbol(这是一个描述)
```

2. **for**

```js
let symbol = Symbol.for('这是for的描述')
console.log(symbol) // Symbol(这是for的描述)
```

> 传入添加和for的区别：for添加的描述会在内存中添加描述，下次再用for添加相同的描述的时候会直接从内存中取，此时2个symbol是相同的

```js
let symbol1 = Symbol.for('这是for的描述')
let symbol2 = Symbol.for('这是for的描述')
console.log(symbol1 === symbol2) // true
```

### 4. 获取描述

1. **传入添加的描述使用 description**

```js
let symbol = Symbol('这是一个描述')
console.log(symbol.description) // 这是一个描述
```

2. **使用for添加的描述使用 keyFor()**

```js
let symbol = Symbol.for('这是for的描述')
console.log(Symbol.keyFor(symbol)); // 这是for的描述
```

### 5. 遍历

1. **getOwnPropertySymbols**

```js
let symbol1 = Symbol('这是一个描述')
let obj = {
    name: 'zs',
   [symbol1]: 'ls'
}
for (const key of Object.getOwnPropertySymbols(obj)) {
    console.log(key);
}
// 这个属性只能遍历symbol类型
```

2. **ownKeys**

```js
let symbol1 = Symbol('这是一个描述')
let obj = {
    name: 'zs',
   [symbol1]: 'ls'
}
for (const iterator of Reflect.ownKeys(obj)) {
    console.log(iterator);
}
// 这个属性可以遍历所有的属性
```

