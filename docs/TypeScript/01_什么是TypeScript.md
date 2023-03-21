# TypeScript 
TypeScript是一种基于JavaScript的强类型编程语言，可以在任何规模上为您提供更好的工具。

## 优势
1. 基于JavaScript并提供更多语法

TypeScript为JavaScript添加了额外的语法，以支持与编辑器的更紧密集成。在编辑器中及早发现错误。

2. 编译及多平台

TypeScript会被转换为JavaScript代码，可以运行在浏览器、node、Deno及其他应用程序中

3. 安全和易上手

TypeScript为JavaScript提供了出色的运行时代码检查工具而无需而外的代码

## 基本语法

在定义的变量后面跟上冒号加类型,在给定类型后，该变量的类型不可被改变

```ts
let num: number = 123
// 此时num被定义了类型为 number 类型
num = '123' // 会报错，不可将字符串类型赋值给number类型
```
