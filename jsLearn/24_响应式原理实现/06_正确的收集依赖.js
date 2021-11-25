class Depend {
    constructor() {
        this.reactiveFns = []
    }
    // 添加依赖函数
    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }
    // 做出响应的事件
    notify() {
        this.reactiveFns.forEach(fn => fn())
    }
}

// const depend = new Depend()

let activeReactiveFn = null
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}

const obj = {
    name:"why",
    age:18
}
// 整体的数据结构存放  每个对象 对应其 依赖
// 使用weakMap  存放 当 对象为空时 可以直接自动通过GC 回收释放内存
const reactiveObjs =  new WeakMap()

// 某个属性 获取其对应的 监听依赖
function getDepend(obj,key) {
    let map = reactiveObjs.get(obj)
    // 对象获取相对的应的 map
    // 其必须是存在 weakMap  中的
    if (!map) {
        map = new Map()
        reactiveObjs.set(obj,map)
    }

    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key,depend)
    }
    return depend
}


// 使用代理 对 obj 做监听
const objProxy = new Proxy(obj,{
    // 监听什么方法就重新什么方法
    get(target,key,receiver) {
        const depend = getDepend(target,key)
        activeReactiveFn ? depend.addDepend(activeReactiveFn):''
        return Reflect.get(...arguments)
    },
    set(target, key, newValue, receiver) {
        Reflect.set(...arguments)
        getDepend(target,key).notify()
    }
})
watchFn(function(){
    console.log('----notify--------');
    console.log(objProxy.name);console.log(objProxy.name);
})
watchFn(function(){
    console.log('----notify--------');
    console.log(objProxy.age);
})


objProxy.name = '1'
objProxy.name = '2'
objProxy.name = '3'
objProxy.age = 18
