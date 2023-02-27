# event

> **用来派发和触发事件**

1. **常用方法**
   - **on：用来注册事件**
   - **emit：用来触发事件**
   - **off：用来取消事件**

```js
const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('click', (...args) => {
    console.log('click事件触发了', ...args);
})
function aaaEmit(...args) {
    console.log('aaa事件触发了', ...args);
}
emitter.on('aaa', aaaEmit)

setTimeout(() => {
    emitter.emit('click', 'zs', 'ls')
    emitter.off('aaa', aaaEmit)
    emitter.emit('aaa', 'zs', 'ls')
}, 2000);
```

2. **获取事件信息**
   - **emitter.eventNames()：获取所有事件的名称**
   - **emitter.listenerCount(event)：获取事件的个数**
   - **emitter.listeners(event)：获取事件对应的方法名**

```js
const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('click', (...args) => {
    console.log('click事件触发了', ...args);
})
emitter.on('click', (...args) => {
    console.log('click2事件触发了', ...args);
})
function aaaEmit(...args) {
    console.log('aaa事件触发了', ...args);
}
emitter.on('aaa', aaaEmit)

setTimeout(() => {
   console.log(emitter.eventNames()) // [ 'click', 'aaa' ]
    console.log(emitter.listenerCount('click')) // 2
    console.log(emitter.listeners('aaa')) // [ [Function: aaaEmit] ]
}, 2000);
```

3. **其他事件**
   - **emitter.removeAllListeners(event)：传递事件参数则移除该事件，不传递参数移除所有事件**
   - **emitter.once()：和on一样是注册事件，不同点：on可以注册多个相同的事件，once只能注册一个相同的事件**
   - **emitter.prependListener()：用该方法注册的事件会在第一个执行，可以注册多个相同的事件**
   - **emitter.prependOnceListener()：用该方法注册的事件会在第一个执行，并且只能注册一个相同的事件**
   - **emitter.removeListener()：该方法会移除对应事件的对应方法**

```js
const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('click', (...args) => {
    console.log('click事件触发了', ...args);
})
emitter.on('click', (...args) => {
    console.log('click2事件触发了', ...args);
})
emitter.once('click', (...args) => {
    console.log('click3事件触发了', ...args);
})
emitter.once('click', (...args) => {
    console.log('click4事件触发了', ...args);
})
function aaaEmit(...args) {
    console.log('aaa事件触发了', ...args);
}
function aaaEmit2(...args) {
    console.log('aaa2事件触发了', ...args);
}

emitter.prependListener('scroll', (...args) => {
    console.log('scroll事件触发了', ...args);
})
emitter.on('aaa', aaaEmit)
emitter.on('aaa', aaaEmit2)

setTimeout(() => {
    emitter.removeAllListeners('click') // 移除所有的click事件
    emitter.removeAllListeners() // 移除所有的事件
    emitter.removeListener('aaa', aaaEmit) // 只移除了aaaEmit事件
    emitter.emit('click', 'zs', 'ls')
    emitter.emit('aaa', 'zs', 'ls')
    emitter.emit('scroll') // 会在第一个事件触发
}, 2000);
```



