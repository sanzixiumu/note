# void&never

## void

void 表示函数没有返回值

```ts
function fn():void {}
function fn():void {
    return 123 // 会报错
}
```

## never

never 表示永远不可能有结果

```ts
function fn(): never {
   throw new Error('fn error')
}
```