# 1. Path

> **node：path模块提供了处理文件和目录路径的实用内置工具**

```js
const path = require('path')
```

# 2. POSIX

> **POSIX：可移植的操作系统接口，这些接口是IEEE组织定义的，这些接口在不同的操作系统上都应当被支持，用POSIX接口编写的应用程序，在不同的系统上可以不做任何的修改直接运行**

- **目前支持POSIX的主流操作系统：linux系统**
- **window本身是不支持POSIX接口的，可以通过扩展WSL来支持**

> **path模块的运行在不同的操作系统中有所不同，在linux系统中使用linux系统的路径，在window中使用window的路径**

```js
const path = require('path')

// On POSIX
const POSIXFile = path.basename('c:\\temp\\myFile.txt')
console.log(POSIXFile) // c:\\temp\\myFile.txt

// On window
const winFile = path.basename('c:\\temp\\myFile.txt')
console.log(winFile) // myFile.txt

// 如果想在任何操作系统上使用 window 一样的路径，可以使用path.win32.basename
const winFile = path.win32.basename('c:\\temp\\myFile.txt')
console.log(winFile) // myFile.txt

// 如果想在任何操作系统上使用 posix 一样的路径，可以使用path.posix.basename
const posix = path.posix.basename('c:\\temp\\myFile.txt');
console.log(posix); // c:\\temp\\myFile.txt
```

# 3. basename

> **basename(路径，扩展名)**

- **path: string**
- **suffix: string**
- **return: string**

> **第一个参数是文件的路径，第二个参数是要删除的扩展名，返回值是文件名**

```js
const basename = path.basename('temp\\myFile.txt')
console.log(basename); // myFile.txt'

const basename = path.basename('temp\\myFile.txt', '.txt')
console.log(basename); // myFile
```

**注意：**

- **在此方法中严格区分大小写，扩展名参数和路径参数大小写不一致时会删除失败**
- **在此方法中路径和扩展名参数不是字符串时会抛出错误**

# 4. delimiter

> **在不同的系统环境下，delimiter 的值有所区别**

- **' : '   for posix**
- **' ; '   for window**

# 5. dirname

> **dianame(路径)**

- **path: string**
- **return: string**

> **用来获取文件的目录路径**

```js
const basename = path.dirname('c\\temp\\myFile.txt')
console.log(basename); // c\temp
```

# 6. extname

> **extname(路径)**

- **path: string**
- **return: string**

```js
const b1 = path.extname('.html')
const b2 = path.extname('html')
const b3 = path.extname('.html.md')
const b4 = path.extname('html.')
const b5 = path.extname('html.md')
console.log('b1:',b1,'b2:', b2,'b3:', b3,'b4:', b4,'b5:', b5); // b1:  b2:  b3: .md b4: . b5: .md
```

# 7. format

> **format(pathObject) 会返回一个路径对象**

- **pathObject: **
  - **root: string**
  - **dir: string**
  - **name: string**
  - **ext: string**
  - **base: string**

```js
const filePath = path.format({
    root: '/',
    ext: '.txt',
    name: 'temp'
})
console.log(filePath) // /temp.txt
```

> **注意：如果提供了 dir 则会忽略 root，如果提供了 base 则会忽略 name 和 ext**

# 8. parse

> **parse(path) 会返回一个路径配置对象**

```js
const parsePath = path.parse('/home/user/dir/file.txt');
console.log(parsePath)
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' 
// }
```

# 9. isAbsolute

> **isAbsolute(path) 判断路径是不是绝对路径**

```js
path.isAbsolute('/base/file.txt') // true
path.isAbsolute('/base/file') // true
path.isAbsolute('c:\\base\file.txt') // true
path.isAbsolute('aaa/file.txt') // false
path.isAbsolute('file.txt') // false
path.isAbsolute('.') // false
```

# 10. relative

> **relative(from, to) 该方法返回从from到to相同路径的以相对路径替代**

- **from: string**
- **to: string**
- **return: string**

```js
const relativePath = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
console.log(relativePath) // ../../impl/bbb 
```

# 11. normalize

> **normalize(path) 该方法返回一个规范化的路径**

```js
// On window
const normalizePath1 = path.normalize('/base/temp')
const normalizePath2 = path.normalize('path/base/../temp')
const normalizePath3 = path.normalize('path/base/temp/..')
const normalizePath4 = path.normalize('///base///temp//aa')
const normalizePath5 = path.normalize('/base/temp/.')
console.log(normalizePath1); // \base\temp
console.log(normalizePath2); // path\temp
console.log(normalizePath3); // path\base
console.log(normalizePath4); // \base\temp\aa
console.log(normalizePath5); // \base\temp
```

# 12. join

> **join([...path]) 该方法会返回一个根据系统所能识别的路径分隔符的路径字符串**

```js
const path1 = path.join('/foo', 'bar', 'baz/asdf', '/quux');
console.log(path1); // \foo\bar\baz\asdf\quux
```

# 13. resolve

> **resolve([...path]) 该方法会返回一个根据系统所能识别的路径分隔符的路径字符串，如果遇到了绝对路径会拼接上完整的路径**

```js
const path1 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
console.log(path1); // C:\Users\10924\Desktop\新建文件夹 (3)\03_Node内置模块\wwwroot\static_files\gif\image.gif
const path2 = path.resolve('./foo/bar', '/baz');
console.log(path2); // c:\baz
const path3 = path.resolve('/foo/bar', './tmp/file/');
console.log(path3); // C:\foo\bar\tmp\file
```

# 14. sep

> **sep：提供平台特点的分隔符**

```js
// On posix
'foo/baz/bar'.split(path.set) // [foo, baz, bar]

// On window
'foo\\baz\\bar'.split(path.set) // [foo, baz, bar]
```

