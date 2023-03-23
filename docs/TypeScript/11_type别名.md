# 类型别名

## 基本语法

给类型取一个名字

语法: type 名称 = 类型

## 约束基本类型

```ts
type a1 = string
```

## 约束对象类型

```ts
type a1 = {
    name:string
}

const b1:a1 = {
    name: 'zs'
}
```

## 约束数组类型

```ts
type a1 = string[]
```

## 约束元祖类型

```ts
type a1 = [string, number]
```

## 扩展类型

```ts
type a1 = {
    name: string
}

type a2 = a1 & {
    age: number
}

const b1:a2 = {
    name: 'zs',
    age: 15
}
```

## 联合类型

```ts
type a1 = string | number
```