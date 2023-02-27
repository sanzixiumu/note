# Stream

- **在读取一个文件时，文件所对应的字节通过管道里面像流水一样传输给客户端，成为字节流**
- **字节流应该是可读可写的**

> **Node在提供了readFile和writeFile来操作文件，为什么还需要字节流呢？**

- **这是因为这些操作无法精准的细节控制，比如：**

1. **如果文件过大，一次性读取的话比较消耗性能**
2. **无法从某一个位置开始和结束读取**
3. **无法做到暂停和恢复读取功能**

```js
const fs = require('fs')
fs.readFile('./test.txt', (err,data) => {
    console.log(data)
})
// 一次性就获取了所有的数据，无法精确控制
```

# 创建读取字节流

- **createReadStream()**

```js
const fs = require("fs");

const f = fs.readFile('./test.txt', (err, data) => {
    console.log(data);// <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 20 6a 73>
})

const readStream = fs.createReadStream('./test.txt', {
    start: 3,
    end: 6,
    highWaterMark: 2
})

readStream.on('data', (data) => {
    console.log(data);// <Buffer 6c 6f>   <Buffer 20 6e>
})
```

- **事件**
  - **data：监听读取文件的回调函数**
  - **open：监听文件打开时的回调函数**
  - **close：监听文件关闭时的回调函数**

```js
const fs = require("fs");
const readStream = fs.createReadStream('./test.txt', {
    start: 3,
    end: 6,
    highWaterMark: 2
})
// 文件返回数据时触发
readStream.on('data', (data) => {
    console.log(data);// <Buffer 6c 6f>   <Buffer 20 6e>
})
// 文件打开时触发
readStream.on('open', (data) => {
    console.log('文件被打开了')
})
//文件关闭时触发
readStream.on('close', (data) => {
    console.log('文件关闭了')
})
```

- **暂停和恢复**
  - **pause：暂停**
  - **resume：恢复**

```js
const fs = require("fs");
const readStream = fs.createReadStream('./test.txt', {
    start: 3,
    end: 12,
    highWaterMark: 2
})
// 文件返回数据时触发
readStream.on('data', (data) => {
    console.log(data);// <Buffer 6c 6f>   <Buffer 20 6e>
    readStream.pause()
    setTimeout(() => {
        readStream.resume()
    }, 1000)
})
```

# 创建写入字节流

- **createWriteStream**

```js
const fs = require('fs')

const writeStream = fs.createWriteStream('./test.txt', {
    flags: 'a+',
    start: 4
})

writeStream.write('你好啊', (err) => {
    console.log('写入成功');
})
```

- **事件**
  - **open：文件打开触发的回调函数**
  - **finish：文件关闭前触发的回调函数**
  - **close：文件关闭时触发的回调函数**

```js
const fs = require('fs')

const writeStream = fs.createWriteStream('./test.txt', {
    flags: 'a+',
    start: 4
})

writeStream.write('你好啊', (err) => {
    console.log('写入成功');
})

writeStream.write('我也好', (err) => {
    console.log('第二次写入');
})

writeStream.close()

writeStream.on('close', () => {
    console.log('文件关闭了');
})
writeStream.on('open', () => {
    console.log('文件打开了');
})
writeStream.on('finish', () => {
    console.log('finish');
})
```

> **注意：在写入后需要调用关闭方法文件才能被关闭**

- **关闭文件方法**
  - **close**
  - **end**

> **end方法相当于做了2步操作：1. 执行write，将end方法的参数写入进去，2. 执行close方法**

# pipe

```js
const fs = require("fs");
const readStream = fs.createReadStream('./test1.txt')

const writeStream = fs.createWriteStream('./test2.txt')

readStream.pipe(writeStream)
```

