// catch 捕获错误



const promise = new Promise((resolve, reject) => {
reject("111111")
})

// catch 捕获 error 也能够返回值 默认是  resolve('返回值')
promise.then(res => {
console.log("res:", res)
}).catch(err => {
console.log("err:", err)
  throw new Error("catch return value")
}).then(res => {
console.log("res result:", res)
}).catch(err => {
console.log("err result:", err)
})