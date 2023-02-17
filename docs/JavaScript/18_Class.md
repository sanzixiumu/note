# Class

> **class拥有更好的封装，继承和多态**

### 1. 创建class

```js
class zh {}
```

### 2. class 和 function

> class 本质是 function 的封装

```js
class zh {}
console.log(typeof zh) // function
```

```js
function User(name) {
    this.name = name
}
const u = new User('zh')
console.log(u); // User {name: 'zh'}

class User1 {
    constructor(name) { // constructor 是 class 内置函数，在new class的时候会自动调用
        this.name = name
    }
}
const u1 = new User1('ls')
console.log(u1); //User1 {name: 'ls'}
```

### 3. 严格模式和this

> 在 function 里函数自调用 this 指向window，严格模式下是 undefined
>
> 在 class 里 this 默认开启严格模式，函数自调用 this 指向 undefined

```js
function User() {
    console.log(this); // window
}

<---------------------------->
'use strict'
function User() {
    console.log(this); // undefined
}
```

```js
 class User {
     show() {
         console.log(this); // undefined
     }
 }
const u = new User()
console.log(u.show());
```

### 4. class 属性不能被遍历

```js
function User(name) {
    this.name = name
}
User.prototype.show = function() {}
const u = new User('zs')
for (const key in u) {
    console.log(key); // name show
}
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptors(User.prototype), null, 2)
); 
//   "constructor": {
//     "writable": true,
//     "enumerable": false,
//     "configurable": true
//   },
//   "show": {
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
// }
```

```js
class User {
    constructor(name) {
        this.name = name
    }
    show() {}
}
const u = new User('name')
for (const key in u) {
    console.log(key);
}
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptors(User.prototype), null, 2)
);
// {
//   "constructor": {
//     "writable": true,
//     "enumerable": false,
//     "configurable": true
//   },
//   "show": {
//     "writable": true,
//     "enumerable": false,
//     "configurable": true
//   }
// }
```

### 5. 访问器

```js
 class User {
     constructor(name) {
         this._name = name
     }
     get name() {
         return this._name
     }
 }
const u = new User('zs')
console.log(u.name); // zs
```

> 当访问和设置属性时，优先执行访问器函数

### 6. 静态方法和属性

> 在 class 里面直接定义的方法和属性为公共属性，服务于类创建的对象
>
> 静态方法和属性服务于构造函数, 需要在前面加上 static 关键字

**案例:**

```js
const lessons = [
    {name: 'js', price: 199},
    {name: 'css', price: 299},
    {name: 'vue', price: 599},
]

class Lesson {
    constructor(data) {
        this.model = data
    }
    static create() {
        return lessons.map(item => new Lesson(item.name))
    }
    static maxPrice() {
        return lessons.sort((a, b) => {
            return b.price - a.price
        })[0]
    }
    static totalPrice() {
        return lessons.reduce((pre, next) => {
            return pre+=next.price
        }, 0)
    }
}
console.log(Lesson.create(lessons));
console.log(Lesson.maxPrice(lessons));
console.log(Lesson.totalPrice(lessons));
```

### 7. 私有属性

1. **symbol**
2. **weakMap**
3. #

### 8. super

> 子类继承父类new构造函数时，需要执行super方法
>
> super会调用父类构造函数，可以传参和调用方法

```js
class User {
    constructor(name) {
        this.name = name
    }
}
class Admin extends User {
    constructor(name) {
        super()
        this.name = name
    }
}
const a = new Admin('zs')
console.log(a);
```

**原理*

```js
let user = {
    name: 'user',
    show() {
        console.log(this.name); // admin
    }
}
let admin = {
    name: 'admin',
    __proto__: user,
    show() {
        this.__proto__.show.call(this)
        console.log(this.name); // admin
    }
}
admin.show()
```

