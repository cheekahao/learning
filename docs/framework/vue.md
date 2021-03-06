# Vue

## 父组件和子组件生命周期钩子执行顺序

### 渲染过程

先创建父组件，然后创建子组件，也就是说父组件的`created`在子组件`created`之前。

父组件在子组件之后挂载，故父组件的`mounted`在子组件`mouted`之后。

![Vue父子组件渲染过程](http://img.lianteam.cn/blog/vue_com.png)

整体渲染过程如下：

父`beforeCreate` -> 父`created` -> 父`beforeMount` -> 子`beforeCreate` -> 子`created` -> 子`beforeMount` -> 子`mounted` -> 父`mounted`

### 更新过程

**子组件更新过程**

- 影响到父组件: 父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` -> 父`updted`
- 不影响父组件: 子`beforeUpdate` -> 子`updated`

**父组件更新过程**

- 影响到子组件: 父`beforeUpdate` -> 子`beforeUpdate` -> 子`updated` -> 父`updted`
- 不影响子组件: 父`beforeUpdate` -> 父`updated`

### 销毁过程

与渲染类似的：

父`beforeDestroy` -> 子`beforeDestroy` -> 子`destroyed` -> 父`destroyed`

**综上，可以看出，`Vue`父子组件生命周期钩子的执行顺序遵循：从外到内，然后再从内到外的规律。**

## Vuex

### install

`Vuex`的`install`通过`beforeCreacte`钩子中增加处理逻辑，保证了所有组件实例的`$store`都是同一份`Store`实例：

```js
function vuexInit () {
    const options = this.$options
    // 注入$store
    if (options.store) { // 存在store表明为根节点，为根节点设置$store
        this.$store = typeof options.store === 'function'
            ? options.store()
            : options.store
    } else if (options.parent && options.parent.$store) { // 子节点取父节点的$store
        this.$store = options.parent.$store
    }
}
```

### 数据响应化

`Vuex`通过`new Vue()`的方式实现`state`和`computed`的响应化，具体通过`resetStoreVM`方法：

```javascript
function resetStoreVM (store, state, hot) {
  /* 存放之前的vm对象 */
  const oldVm = store._vm 

  // 通过Object.defineProperty为每一个getter方法设置get代理方法，将getter的属性代理到store._vm上，通过访问其计算属性的方式实现get
  store.getters = {}
  const wrappedGetters = store._wrappedGetters
  const computed = {}

  forEachValue(wrappedGetters, (fn, key) => {
    computed[key] = () => fn(store)
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true // for local getters
    })
  })

  // Vue.config.silent暂时设置为true的目的是在new一个Vue实例的过程中不会报出一切警告
  const silent = Vue.config.silent

  Vue.config.silent = true

  /*  这里new了一个Vue对象，运用Vue内部的响应式实现注册state以及computed*/
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  Vue.config.silent = silent

  // enable strict mode for new vm
  /* 使能严格模式，保证修改store只能通过mutation */
  if (store.strict) {
    enableStrictMode(store)
  }

  if (oldVm) {
    /* 解除旧vm的state的引用，以及销毁旧的Vue对象 */
    if (hot) {
      store._withCommit(() => {
        oldVm._data.$$state = null
      })
    }
    Vue.nextTick(() => oldVm.$destroy())
  }
}
```

### 严格模式

`Vuex`严格模式下，所有修改state的操作必须通过mutation实现，否则会抛出错误。这是通过`watch state`实现的：

```javascript
function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, () => {
    if (process.env.NODE_ENV !== 'production') {
      /* 检测store中的_committing的值，如果是true代表不是通过mutation的方法修改的 */
      assert(store._committing, `Do not mutate vuex store state outside mutation handlers.`)
    }
  }, { deep: true, sync: true })
}
```

## `Object.defineProperty`有哪些缺点

1. `Object.defineProperty`只能劫持对象的属性，而`Proxy `是直接代理对象。由于`Object.defineProperty` 只能对属性进行劫持，需要遍历对象的每个属性。而`Proxy` 可以直接代理对象。
2. `Object.defineProperty`对新增属性需要手动进行 `Observe`。由于`Object.defineProperty` 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用`Object.defineProperty`进行劫持。 也正是因为这个原因，使用`Vue`给`data` 中的数组或对象新增属性时，需要使用`vm.$set` 才能保证新增的属性也是响应式的。
3. `Proxy`支持13种拦截操作，这是`defineProperty`所不具有的。
4. `Proxy`作为新标准，长远来看，JS引擎会继续优化`Proxy` ，但`getter`和`setter`基本不会再有针对性优化。
5. `Proxy`兼容性差目,前并没有一个完整支持`Proxy`所有拦截方法的`Polyfill`方案

## `Vue3`新特性

* 基于`Proxy`实现数据变动的监听
* 使用`TypeScript`开发
* 组合式`API`(`Composition API`)

### `Composition API`

是较低级别的数据驱动视图和组件生命周期API，能够实现一种更自由形式的编写组件逻辑的方式。可以像编写函数一样自由地表达，编写和重用有状态组件逻辑

`Composition API`完全可以和现有的`Options API`配合使用

* `Composition API`会在`Options API`之前解析，并且不能提前访问这些选项中定义的 `property`
* `setup()`函数返回的`property`将会被暴露给 `this`，在 `Options API`中可以访问到

### `Ref`

`Ref`是为了以变量形式传递响应式的值而引入的“新”概念。基本类型值需要以`Ref`的形式引用

```js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```

`Reactive`的应用类型解构赋值时候，会失去可响应性，需要用`toRefs`API

```js
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0,
  })

  // ...
  return toRefs(pos)
}

```

### 与`React Hooks`相比

基于函数的`Composition API`提供了与`React Hooks` 同等级别的逻辑组合能力。但其`setup()`函数只会被调用一次，因此有一下优点：

* 一般来说更符合惯用的`JavaScript`代码的直觉
* 不需要顾虑调用顺序，可以用在条件语句中
* 不会在每次渲染时重复执行，可以以降低垃圾回收的压力
* 不存在内联处理函数导致子组件永远更新的问题，不需要 `useCallback`
* 不存在忘记记录依赖的问题，也不需要`useEffect`和`useMemo`并传入依赖数组以捕获过时的变量。`Vue`的自动依赖跟踪可以确保侦听器和计算值总是准确无误
