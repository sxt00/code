// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(11111)
    }, 2001);
  })
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(22222)
    }, 2000);
  })
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(33333)
    }, 3000);
  })
  
  // any: 任一 成功的
// 只要有一个Promise变成fulfilled状态, 那么就结束
// 意外: 
  Promise.any([p1, p2, p3]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
    // 全部失败
    // AggregateError: All promises were rejected
  })
  