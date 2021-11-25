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

watchFn(function(){
    console.log('----notify--------');
    console.log(obj.name);
})

// if 发生响应
depend.notify()