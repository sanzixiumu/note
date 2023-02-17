# Module

### 1. 模块化的作用

> **模块化会将一些重复的代码和逻辑封装起来，需要使用的时候每个模块可以统一导入使用，增加了代码的可维护性和可阅读性**

**模块化的案例**

```js
let module = (function () {
    const moduleList = {}
    function define(name, modules, action) {
        modules.map((m, i) => {
            modules[m] = moduleList[m]
        })
        moduleList[name] = action(modules)
    }
    return { define }
})()

module.define('zs', [], function() {
    return {
        first(data) {
            return data[0]
        },
        max(data) {
            return data.sort((a, b) => b -a)[0]
        }
    }
})

module.define('wangwu', [], function() {
    return {
        min(data) {
            return data.sort((a, b) => a -b)[0]
        }
    }
})

module.define('ls', ['zs', 'wangwu'], function(arr) {
    console.log(arr['zs']);
})
```

### 2. 模块在标签的使用

> 使用模块化时，需要在script标签上添加type='module'

### 3. 模块的延迟性和严格模式

> 1. 在引入模块时，浏览器会自动先将所有的依赖模块先引入和延迟加载，方便需要使用到该模块的内容可以正常解析

```js
// 其他文件：module.js
<script type="module">
    import {} from './module.js'
</script>
<button>点击</button>
// zh.js内部
console.log(document.querySelector('button')); // 可以正常获取到dom元素
```

> 2. 模块化默认使用严格模式

```js
site = 'baidu.com'
console.log(site);
// Uncaught ReferenceError: site is not defined
```

### 4. 模块的作用域

> 每一个模块都有自己的作用域，作用域之间不互通，也不和window互通，模块之前想使用的话需要导入和导出

### 5. 模块的导入和导出

1. 具名导入和导出 **export import**

```js
import { site } from './module.js'
console.log(site);
// module.js内部
let site = 'baidu.com'
export { site }
```

2. 默认导入和导出 **export default  import**

```js
import show from './zs.js'
console.log(show()); // show
// module.js内部
export default function show() {
    console.log('show');
}
```

3. 批量导入和导出 **export import **

```js
import * as api from './zs.js'
console.log(api.show()); // show
console.log(api.site); // 'baidu.com'
// module.js内部
export function show() {
    console.log('show');
}
export let site = 'baidu.com'
```

4. 混合导入和导出 **export import **

```js
import { site }, show from './zs.js'
console.log(api.show()); // show
console.log(api.site); // 'baidu.com'
// module.js内部
export default function show() {
    console.log('show');
}
export let site = 'baidu.com'
```

### 6. 动态导入模块

> 模块默认要写在顶层，此时如果需要等待某些事件触发后再加载模块，需要使用动态导入 import()

```js
if(true) {
    import('./module.js') // 此时会返回promise
}
```

