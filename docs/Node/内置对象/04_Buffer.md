# Buffer

- **计算机所有的内容：文字、图片、音频、视频等等，在内存中都是通过二进制来存储的**
- **JavaSctipt在处理图片、视频这些资源时，会把对应的地址交给浏览器去处理**
- **在Node服务器中，就需要自己来操作一些二进制，于是Node提供了一个全局的Buffer来处理二进制**

1. **创建Buffer**

```js
// 处理字符串
const buffer = Buffer.from('zs')
console.log(buffer); // <Buffer 7a 73>

// 处理中文
const buffer1 = Buffer.from('张三')
console.log(buffer1) // <Buffer e5 bc a0 e4 b8 89>
// 一个中文对应3个二进制
```

> **获得的Buffer对象其实就是一个数组，数组的每一项就是每个数据的二进制**

2. **Buffer的创建过程**

![image-20230221143907245](C:\Users\10924\AppData\Roaming\Typora\typora-user-images\image-20230221143907245.png)

# 编码

- **在读写文件的时候可以传递编码参数用于解析Buffer**
- **toString 方法可以将二进制数组转换为对应编码的格式**

```js
const buffer = Buffer.from('张三', 'utf8')
console.log(buffer.toString()); // 表示用utf8进行解码
```

> **注意：编码格式和解码格式不对的话会产生乱码**

```js
const buffer = Buffer.from('张三', 'utf8')
console.log(buffer.toString('utf16le')); // 会乱码
```

# alloc

- **Buffer.alloc()：用于创建一个Buffer**

```js
const alloc = Buffer.alloc(9) // <Buffer 00 00 00 00 00 00 00 00 00>

// 可以对该数组进行修改
alloc[0] = 22
alloc[1].toString(21)
```

- **alloc在最开始创建的时候，会默认向内存申请一个 8 * 1024 字节的内存，防止一直创建Buffer带来的性能消耗**

# 字节换算

**1byte = 8bit**

**1kb = 1024byte**

**1mb = 1024kb**

**1g = 1024mb**