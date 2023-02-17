# 数组

> **数组：数组是任意属性的集合**

### 1. 创建数组

1. ##### new Array()

```js
let array = new Array(1,2,3,4)
console.log(array); // [1, 2, 3, 4]
```

> 注意：new Array(4)的时候，创建的是4个空属性的数组，此时应该是使用Array.of(4)

```js
let array = Array.of(4) // [4]
```

2. arr = []

```js
let array = [1,2,3,4]
console.log(array) // [1,2,3,4]
```

### 2. 数组的属性和类型转换与检测

1. length

​		数组能使用构造函数创建，所以数组本质也是一个对象，可以使用length属性

​       **清空数组的方法**：

1. 1 array.length = 0

1. 2 array = []

> 推荐使用length = 0，等于空数组为重新赋值地址，当有数组之间的引用关系的时候，赋值空数组不会对其他引用的数组产生影响

2. array.join()： 传入连接符

```js
let arr = [1,2,3,4]
console.log(arr.join(',')) // '1,2,3,4'
```

3. array instanceof Array 

```js
[1,2,3,4] instanceof Array // true
```

4. Array.isArray()

```js
Array.isArray([1,2,3,4]) // true
```

> instanceof 和 isArray 的区别
>
> instanceof 判断右边的参数的原型是否在左边参数的prototype的原型链上
>
> isArray 只要是数组就会返回 true

### 3. 数组的填充和切割

1. fill

```js
let arr = ['张三', '李四', '王五', '赵六']
arr.fill('孙七', 2, 4) // ['张三', '李四', '孙七', '孙七']
```

2. slice 完全复刻新数组

```js
let arr = [1,2,3,4]
arr.slice(0, 2) // [1,2]
arr.slice() // [1,2,3,4]
console.log(arr) // [1,2,3,4] 不会改变原数组
```

3. splice

```js
let arr = [1,2,3,4]
arr.splice(0, 1) // [2,3,4]
arr.splice(0, 1, '张三') // ['张三', 3, 4]
arr.splice(0, 0, '李四') // ['李四', 3, 4]
console.log(arr) // ['李四', 3, 4]
// splice一直操作的都是原数组，所以splice是会改变原数组
```

### 4. 数组的展开和合并

1.  ...语法

```js
let arr = [[1,2,3,4]]
console.log(...arr) // [1,2,3,4]
function arr (...args) {
    console.log(args);
}
arr(1,2,3,4) // [1, 2, 3, 4]
```

2. 解构

```js
let [a, b] = [1,2]
console.log(a, b) // 1, 2
```

3. flat

```js
let arr = [1, [2, [3, [6]], [4], [5]]]
console.log(arr.flat()); // [1, 2, Array(2), Array(1), Array(1)]

let arr = [1, [2, [3, [6]], [4], [5]]]
console.log(arr.flat(3)); // [1, 2, 3, 6, 4, 5]
```

4. concat

```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]
arr1.concat(arr2) // [1,2,3,4,5,6]
```

### 5. 数组查找元素

1. indexOf lastIndexOf

> indexOf: 从前面开始查找，找到则返回下标，没找到则返回-1
>
> lastIndexOf: 从后面开始查找，找到则返回下标，没找到则返回-1

2. includes

> includes: 找到则返回true,没找到则返回false

### 6. 数组的排序和反转

1. sort 冒泡排序

```js
let arr = [4,5,2,3,5,1]
let arr1 = arr.sort((a, b) =>{
    return a - b
})
console.log(arr1) [1,2,3,4,5,5]
let arr2 = arr.sort((a, b) =>{
    return b - a
})
console.log(arr1) [5,5,4,3,2,1]
```

2. reverse 反转数组

```js
let arr = [1,2,3,4]
arr.reverse() // [4,3,2,1]
```

### 7. 数组的出栈和入栈

1. push unshift

> array.push: 从数组后面压入元素
>
> array.shift: 从数组前面压入元素
>
> **返回值为数组的长度**

2. pop shift

> array.pop: 从数组后面弹出元素
>
> array.shift: 从数组前面弹出元素
>
> **返回值为弹出的元素**

> **注意：**这4个方法都会改变原数组

### 8. 数组的循环

> 参数为回调函数，回调函数的参数依次为：1.数组每一项 2.索引 3.原数组

1. **forEach**

> 会循环至每一项，返回值为undefined

2. **map**

> 会循环至每一项，返回值为返回的新数组

3. **some**

> 会循环至每一项，只要有一项符合条件就返回true，没有符合条件则返回false

4. **every**

> 会循环至每一项，必须每一项都符合条件才返回true，否则返回false

5. **filter**

> 会循环数组的每一项，返回所有符合条件的每一项，值是数组

6. **find**

> 当符合条件时停止循环，返回符合条件的第一项

7. **findIndex**

> 当符合条件时停止循环，返回符合条件的第一项的索引

8. **reduce**

> 回调函数中会多增加一个参数为初始值，如果有传递回调函数以外的第二个参数，初始值则为该参数，没有传递初始值则为数组的第一个值

```js
let arr = [1,2,3,4,5]
let res = arr.reduce((pre, cur, index, array) => {
    console.log(pre, cur); 
})
// 1 2
// undefined 3
// undefined 4
// undefined 5
// 此时没有传递回调函数以外的参数，pre 为数组的第一项, cur 为数组的第二项
// pre第二次的值为函数的返回值，没有返回值则为undefined

// 计算数组的某一项出现的次数
let arr = [1,2,3,1,1]
function arrayTotal(array, total) {
    return array.reduce((pre, cur) =>{
        return pre += cur == total ? 1 : 0
    }, 0)
}
console.log(arrayTotal(arr, 1));

// 计算数组的最大的一项
let arr = [1,2,3,1,1, 90]
function arrayMax(array) {
    return array.reduce((pre, cur) =>{
        return pre > cur ? pre : cur
    }, 0)
}
console.log(arrayMax(arr));
```

9. keys, values, entries, for of

```js
let array = ['zs', 'ls', 'ww']
let key = array.keys()
let key = array.values()
let key = array.entries()
console.log(key.next());

for(key of array) {
    console.log(key)
}
```

