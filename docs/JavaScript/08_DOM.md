# DOM

> DOM： 文档对象模型 Document Object Model

### 节点树：

![image-20220611225459715](C:\Users\10924\AppData\Roaming\Typora\typora-user-images\image-20220611225459715.png)

### DOM节点

> 文档的最外层为document，文档流所有的节点对象都可以通过外层的document获取

```js
document.documentElement  // 获取 html 对象
document.head  // 获取 head 标签
document.body  // 获取 body 标签
document.title  // 获取页面标题
```

###### 1. 获取节点

```js
<div id="app">
	<span class="main"></span>  
	<span><span>
	<input type="text" name="myInput"></input>
</div>

// 获取单个元素
var oApp = document.getElementById('app')
// 获取类数组
var aMain = document.getElementsByClassName('main')
var aSpan = document.getElementsByTagName('span')
var aMyInput = document.getElementsByName('myInput')

// 通过选择器获取元素
var oApp = document.querySelector('#app')
var aSpan = document.querySelectorAll('span')
```

> get 获取和 query 获取的区别

get 获取的元素会随着原本的元素 DOM 的改变而改变，query 则不会

get 获取的元素相当于会实时更新，而 query 则相当于拍照保存

```js
例如:
<div id="app">1000</div>
<div>2000</div>
<script>
    var app = document.getElementById('app')
    var aDiv = document.getElementsByTagName('div')
    console.log(aDiv); // [div, div]
    app.remove()
    console.log(aDiv); // [div]
</script> 
```

###### 2. 节点类型(常用) nodeType

| 元素节点                       | 1      |
| ------------------------------ | ------ |
| **属性节点**                   | **2**  |
| **文本节点**                   | **3**  |
| **注释节点**                   | **8**  |
| **document**                   | **9**  |
| **DocumentFragment(文档片段)** | **11** |

###### 3. 节点名称 nodeName(tagName)

> 获取到的节点名称一般为大写 例如：DIV SPAN，一部分SVG生成的标签获取的名称为小写

###### 4. 节点值 nodeValue

1. 元素节点的nodeValue为null或undefined
2. 属性节点的nodeValue为属性值
3. 文本节点的nodeValue为文本自身

###### 5. 节点的属性集合 element.attributes

###### 6. 获取相邻、父类和子类节点

1. element.childNodes 获取所有的子节点

   1.1 element.firstChild 获取第一个子节点

   1.2 element.lastChild 获取最后一个子节点

   1.3 element.firstElementChild 获取第一个子元素

   1.4 element.lastElementChild 获取最后一个子元素

   1.5 element.hasChildNodes() 查询该节点时候有子节点

```js
<div id="app">
    <span>this is span</span>
    <h1 id="h1">this is h1-1</h1>
    <h1>this is h1-2</h1>
    <p>this is p</p>
</div>
<script>
    var oApp = document.getElementById('app')
	console.log(oApp.childNodes.length); // 9
	// 这里包含了元素之间的空白节点
</script> 
```

2. element.children (获取所有的元素节点)

```js
<div id="app">
    <span>this is span</span>
    <h1 id="h1">this is h1-1</h1>
    <h1>this is h1-2</h1>
    <p>this is p</p>
</div>
<script>
    var oApp = document.getElementById('app')
	console.log(oApp.children.length); // 4
</script> 
```

3. element.parentNode 获取父元素节点

```js
<div id="app">
    <span>this is span</span>
    <h1 id="h1">this is h1-1</h1>
    <h1>this is h1-2</h1>
    <p>this is p</p>
</div>
<script>
    var oH1 = document.getElementById('h1')
	console.log(oH1.parentNode); // <div id="app"></div>
</script> 
```

4. 获取兄弟节点

   4.1 element.nextSibling 获取下一个兄弟节点

   4.2 element.nextElementSibling 获取下一个兄弟元素

   4.3 element.previousSibling 获取上一个兄弟节点

   4.4 element.previousElementSibling 获取上一个兄弟元素

###### 7. 新增元素

1. 创建节点 document.createElement

```js
var div = document.createElement('div')
console.log(div); // <div></div>
```

2. 创建注释节点 document.createComment

3. 创建文本节点 document.createTextNode

###### 8. 插入元素

1. 在元素的子元素最后插入元素 el.append(node)
2. 在元素的子元素最前面插入元素 el.prepend(node)
3. 在元素的前面插入元素 el.before(node)

> 如果插入的元素为已有的元素，则删除原来的元素，在指定位置插入该元素

###### 9. 删除元素

1. 父元素删除子元素 parentNode.removeChild 

> 父元素删除的返回值是被删除的元素

2. 自己删除自己 el.remove

> 自己删除自己后没有返回值

###### 10. 替换元素 replaceWith

```js
<div id="app">
    <span>this is span</span>
    <h1 id="h1">this is h1-1</h1>
    <h1>this is h1-2</h1>
    <p>this is p</p>
</div>
<script>
    var div = document.createTextNode('class')
    var app = document.getElementById('app')
    var h1 = document.getElementById('h1')
    app.replaceWith(...node)
</script> 
```

###### 11. 获取元素内容

1. innerHTML (会解析标签)
2. innerText (不会解析标签)

###### 12. 获取元素身上的属性

1. 通过 . 操作符 (不可操作自定义属性)

```js
<div id="box">
    <span class="span">this is span</span>
</div>
<script>
        var span = document.getElementsByClassName('span')
		console.log(span[0].className); // span
</script>
```

2. 通过 getAttribute setAttribute (可操作自定义属性)

```js
<div id="box">
    <span class="span">this is span</span>
</div>
<script>
        var span = document.getElementsByClassName('span')
		console.log(span[0].getAttribute('class')); // span
</script>
```

3. 获取以 data 开头的自定义属性 dataset

```js
<div id="box">
    <span data-myClass="app">this is span</span>
</div>
<script>
    var span = document.getElementsByTagName('span')
	console.dir(span[0].dataset.myclass); // app
</script>
```

4. 通过 classList 操作类名

   4.1 el.classList.add 添加类名

   4.2 el.classList.remove 删除类名

   4.3 el.classList.toggle 切换类名

   4.4 el.classList.contains 是否包含该类名 

