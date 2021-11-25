// promise 执行完成后(状态改变为 失败或者 成功) 一定执行的方法
const promise = new Promise((resolve, reject) => {
    // resolve("resolve message")
    reject("reject message")
  })
  
  promise.then(res => {
    console.log("res:", res)
  }).catch(err => {
    console.log("err:", err)
  }).finally(() => {
    console.log("finally code execute")
  })
  