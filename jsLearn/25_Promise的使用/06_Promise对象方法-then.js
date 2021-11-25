// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

const promise = new Promise((resolve, reject) => {
    resolve("hahaha")
})

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用
promise.then(res => {
  console.log("res1:", res)
})

promise.then(res => {
  console.log("res2:", res)
})

promise.then(res => {
  console.log("res3:", res)
})
// 2.then方法传入的 "回调函数: 可以有返回值
// then方法本身也是有返回值的, 它的返回值是Promise