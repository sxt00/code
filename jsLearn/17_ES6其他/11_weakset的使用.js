const weakset1 = new WeakSet()

// 只能存放对象类型

// 对象是个弱引用
let obj={
    am:'4545'
}
weakset1.add(obj)
obj = null
console.log(weakset1);


// 3.WeakSet的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }

  running() {
    if (!personSet.has(this)) {
      throw new Error("不能通过非构造方法创建出来的对象调用running方法")
    }
    console.log("running~", this)
  }
}

let p = new Person()
p.running()
// p.running.call({name: "why"})