# Map

> **Map：可以使用任意数据类型作为键名**

### 1. 创建Map

1. **new Map**

```js
let map = new Map([['name', 'zs'], [function(){}, 'ls'], [{}, 'ww']])
console.log(map) // Map(3) {'name' => 'zs', ƒ => 'ls', {…} => 'ww'}
```

2. **set**

```js
let map = new Map()
map.set('name', 'zs')
map.set(function() {}, 'ls')
map.set({}, 'ww')
console.log(map); // Map(3) {'name' => 'zs', ƒ => 'ls', {…} => 'ww'}
```

### 2. 删除Map

1. **delete**

```js
let map = new Map()
map.set('name', 'zs')
map.set(function() {}, 'ls')
map.set({}, 'ww')
map.delete('name')
console.log(map); // Map(2) {ƒ => 'ls', {…} => 'ww'}
```

> delete删除成功返回true，删除失败则返回false

2. **clear**

```js
let map = new Map()
map.set('name', 'zs')
map.set(function() {}, 'ls')
map.set({}, 'ww')
map.clear()
console.log(map); // Map(0) {}
```

### 3. 循环Map

**keys, values, entries**

```js
let map = new Map()
map.set('name', 'zs')
map.set(function() {}, 'ls')
map.set({}, 'ww')
console.log(map.keys()) // MapIterator {'name', ƒ, {…}}
console.log(map.values()) // MapIterator {'zs', 'ls', 'ww'}
```

### 4. 判断是否存在

**has**

```js
let map = new Map()
map.set('name', 'zs')
map.set(function() {}, 'ls')
map.set({}, 'ww')
map.has('name') // true
```

### 5. WeakMap

##### 1. 使用方式

> **和Map使用方式一样，唯一的区别是WeakMap需要传入引用类型**

##### 2. 特点

> WeakMap是弱引用类型：在JS的垃圾回收机制里，如果WeakMap传入了引用数据类型，是不会被JS所记录，当该引用的所有变量被删除时，不会通知到WeakMap

```js
let arr = []
let newArr = arr
let weakSet = new WeakMap()
WeakMap.set(arr, 'ls')
arr = null
newArr = null
console.log(weakSet)
```

