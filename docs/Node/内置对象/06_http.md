# http

> **Node允许使用JavaSctipt技术开发服务器**

# 启动方式

1. **createServer**

```js
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => {
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

2. **http.Server**

```js
const http = require('http')
// 创建服务器
const server = http.Server((req, res) => {
    res.end('hello http')
})
// 监听地址
server.listen('8000', () => {
    console.log('服务启动成功'); 
})
```

> **这2种方式本质上是一样的，使用其中一种即可**

- **可以同时启动多台服务器**

```js
const http = require('http')
// 创建服务器
const server1 = http.createServer((req, res) => {
    res.end('hello http')
})
// 监听地址
server1.listen('8000', '127.0.0.1', () => {
    console.log('服务器1启动成功')
})

const server2 = http.createServer((req, res) => {
    res.end('hello http')
})
// 监听地址
server2.listen('8000', '127.0.0.1', () => {
    console.log('服务器2启动成功')
})
```

> **注意：在创建服务器后需要调用end方法，浏览器才知道该结束此次请求，才会将内容显示在浏览器上，不调用end方法浏览器就会一直处在请求状态**

# 地址

> **在监听地址时，可以传入4个参数**

- **第一个参数传入端口号，如果不传会有默认值，可通过server.address().port方法查看**
- **第二个参数传入地址，如果不传会有默认值，默认值是0.0.0.0，通常可以传入localhost、ip地址127.0.0.1、或者ip地址0.0.0.0**
  - **localhost本质上是一个域名，会被解析成127.0.0.1**
  - **127.0.0.1是一个回环地址，自己发出去的包可以被自己接收到**
    - **正常数据包经过 应用层 -->传输层 --> 网络层 --> 数据链路层 --> 物理层**
    - **回环地址会在网络层时就将数据返回**
    - **使用127.0.0.1时，本机IP地址不能访问该页面**
- **第三个参数**
- **第四个参数传入回调函数，当服务器启动成功时会执行该函数**

# 请求参数

> **在创建服务器时，需要传入一个回调函数，该函数会返回2个参数，一个参数是请求的参数(request)，一个参数是响应的参数(response)**

```js
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

- **url属性**

1. **请求的IP地址参数会在req.url获取到**

```js
// ip地址： http://localhost:8000/
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    console.log(req.url) // http://localhost:8000/
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

2. **如果路径携带了参数，需要解析的话，可以使用内置模块 url和 queryString**

```js
// 没有使用 url 解析

// ip地址：http://localhost:8000/login?username=%22zs%22&age=18
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    console.log(req.url) // http://localhost:8000/login?username=%22zs%22&age=18
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})

// 使用了 url 解析

// ip地址：http://localhost:8000/login?username=%22zs%22&age=18
const http = require('http')
const url = require('url')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    const { pathname, query } = url.parse(req.url)
    console.log(pathname) // http://localhost:8000
     console.log(query) // username=%22zs%22&age=18
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})

// 使用了 queryString 解析

// ip地址：http://localhost:8000/login?username=%22zs%22&age=18
const http = require('http')
const url = require('url')
const qs = require('queryString')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    const { pathname, query } = url.parse(req.url)
    console.log(pathname) // http://localhost:8000
    const params = qs.parse(query)
     console.log(params) // { username: '"zs"', age: '18' }
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

- **headers参数**

> **headers参数表示此次请求时请求头所携带的参数**

```js
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    const headers = req.headers
    console.log(headers) // 有如下参数（部分）
    {
      host: 'localhost:8000',
      connection: 'keep-alive',
      'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
      'sec-ch-ua-platform': '"Windows"',
      accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'no-cors',
      'sec-fetch-dest': 'image',
      referer: 'http://localhost:8000/login?username=%22zs%22&age=18',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9'
    }
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

- **content-type：表示此次请求的类型**
  - **application/json：表示是json类型**
  - **application/xml：表示是xml类型**
  - **text/plain：表示是文本类型**
  - **multipart/form-data：表示是上传文件**
- **centent-length：表示文件的大小和长度**
- **accept-language：表示使用的语言**
- **accept-encoding：告知服务端，客户端支持的压缩格式**
- **accept：告知服务端，客户端支持的文件格式**
- **user-agent：客户端相关信息**

# 响应参数

```js
const http = require('http')
// 创建服务器
const server = http.createServer((req, res) => { // req 请求的参数， res 响应的参数
    res.end('hello http')
})
// 监听地址
server.listen('8000', '127.0.0.1', () => {
    console.log('服务器启动成功')
})
```

- **写入文本给客户端**

1.  **使用write写入**
2. **使用end写入，使用end时，会执行2件事，第一件事调用write写入文本，第二件事结束此次请求**

```js
const http = require('http')
// 创建服务器
const server = http.Server((req, res) => {
    res.write('hello')
    res.end('hello http')
})

server.listen('8000', () => {
    console.log('服务启动成功');
})
```

- **状态码**

- **设置请求头**

1. **使用setHeader设置**
2. **使用writeHead设置**

```js
const http = require('http')
// 创建服务器
const server = http.Server((req, res) => {
    res.writeHead(200, {
        'content-type': 'application/json;charset=urt8'
    })
    //或者
    res.setHeader('content-type',  'application/json;charset=urt8')
    res.write('你好啊')
    res.end('hello http')
})

server.listen('8000', () => {
    console.log('服务启动成功');
})
```

# 发送网络请求



