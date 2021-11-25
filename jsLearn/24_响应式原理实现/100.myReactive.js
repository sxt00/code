/**
 * 响应式原理分析
 * 使用 weak map  存放 obj  ---->  对应的各个键值对的 依赖  map
 *   map  存放 key ----> Depend 依赖关系 有的依赖 以及 需要做出的响应
 * 
   */


// 1. 
// 整体的数据结构存放  每个对象 对应其 依赖
// 使用weakMap  存放 当 对象为空时 可以直接自动通过GC 回收释放内存
const reactiveObjs =  new WeakMap()


// 2. 响应式的 对象
function reactiveObj(obj) {
    // 把该对象放入到 reactiveObjs 里面去 且 为该对象的每个属性 添加new Depend
    reactiveObjs.set(obj, new Map())
    Object.keys(obj).forEach( key => reactiveObjs.get(obj).set(key, new Depend))

    // 返回 该对象监听过后的 代理对象
    return new Proxy(obj,{
        // 监听什么方法就重新什么方法
        get(target,key,receiver) {
            // const depend = getDepend(target,key)
            return Reflect.get(...arguments)
        },
        set(target, key, newValue, receiver) {
            Reflect.set(...arguments)
            getDepend(target,key).notify()
        }
    })
}

/**
 * Depend
 * 一个属性 reactiveFn  new Set 去重的  响应函数
 * 两个方法  一个添加函数   一个调用所有函数 做出响应
 */

 class Depend {
    constructor() {
        this.reactiveFns = new Set()
    }
    // 添加依赖函数
    addDepend(reactiveFn) {
        this.reactiveFns.add(reactiveFn)
    }
    // 做出响应的事件
    notify() {
        this.reactiveFns.forEach(fn => fn())
    }
}

// 某个属性 获取其对应的 depend
function getDepend(obj,key) {
    return reactiveObjs.get(obj).get(key)
}
function setDepend(obj,key,fn) {
    reactiveObjs.get(obj).get(key).addDepend(fn)
}

const obj = {
    name:'xiaoming',
    age: 18,
    address:'China',
    height: 1.88
}
const reactiveObj1 = reactiveObj(obj)
setDepend(obj,'age', ()=>{console.log(`--------------${this}--------changed`)})
reactiveObj1.age = 20
reactiveObjs.name = ''






