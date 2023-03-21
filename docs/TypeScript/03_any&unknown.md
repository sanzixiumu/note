# any&unknown

## any

any类型代表该变量可以是任意的类型

```ts
let a:any = 123
a = '23'
```
any类型可以是任意类型，可以赋值给任意类型，也可以被任意类型赋值

## unknown

unknown类型表示不知道是什么类型

```ts
let a = 123

let b:unknown
b = a // 可以被赋值
a = b // 不可以被赋值
```
unknown可以被任意类型赋值，但unknown类型不能赋值给除了unknown和any的其他类型
