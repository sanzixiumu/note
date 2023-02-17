# Set

### 1. 创建set

1. **new Set**

```js
let set = new Set([1,2,3])
let set = new Set({name: 'zs'})
let set = new Set("zs")
```

2. **add**

```js
let set = new Set()
set.add(1)
console.log(set) // set(1)
```

> 注意：add 只能添加单个元素

### 2. 删除set

1. **delete**

```js
let set = new Set()
set.add(1)
set.add(2)
set.delete(1)
console.log(set) // set(2)
```

> delete删除成功返回true，删除失败返回false

2. **clear**

```js
let set = new Set()
set.add(1)
set.add(2)
set.clear(1)
console.log(set) // set(0)
```

### 3. 遍历set

1. **keys, values, entries**

```js
let set = new Set(['zs', 'ls'])
set.keys()
set.values()
set.entries()
```

> 由于数组对象间方法的统一，set没有键名，所以使用迭代方法时，键名和键值相同

2. **forEach**

> 和数组相同，没有索引，索引和每一项相同

### 4. 判断是否存在

**has**

```js
let set = new Set(['zs'])
console.log(set.has('zs')); // true
```

### 5. 并集，交集， 差集

```js
let set1 = new Set([1,2,3,4,5])
let set2 = new Set([1,2,3])
// 并集
let set3 = [...set1, ...set2]
console.log(set3) // [1,2,3,4,5,1,2,3]
// 交集
let arr = []
for(const value of [...set1]) {
    set2.has(value) && arr.push(value)
}
console.log(arr) // [1,2,3]
或者
[...set1].filter(item => {
    return set2.has(item)
})
// 差集
let arr = []
for(const value of [...set1]) {
    !set2.has(value) && arr.push(value)
}
console.log(arr) // [4,5]
或者
[...set1].filter(item => {
    return !set2.has(item)
})
```

### 6. WeakSet

##### 1. 使用方法

> **和set使用方式一样，唯一的区别是WeakSet需要传入引用类型**

##### 2. 特点

> **WeakSet是弱引用类型：在JS的垃圾回收机制里，如果WeakSet传入了引用数据类型，是不会被JS所记录，当该引用的所有变量被删除时，不会通知到WeakSet**

```js
let arr = []
let newArr = arr
let weakSet = new WeakSet()
weakSet.add(arr)
arr = null
newArr = null
console.log(weakSet)
```

