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

const depend = new Depend()

function watchFn(fn) {
    depend.addDepend(fn)
}

const obj = {
    name:"why"
}
// 使用代理 对 obj 做监听
const objProxy = new Proxy(obj,{
    // 监听什么方法就重新什么方法
    get(target,key,receiver) {
        return Reflect.get(...arguments)
    },
    set(target, key, newValue, receiver) {
        Reflect.set(...arguments)
        depend.notify()
    }
})
watchFn(function(){
    console.log('----notify--------');
    console.log(obj.name);
})

objProxy.name = '1'
objProxy.name = '2'
objProxy.name = '3'
