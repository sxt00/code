// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(11111)
    }, 1000);
  })
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(22222)
    }, 2000);
  })
  
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(33333)
    }, 3000);
  })
  
  // allSettled 打印所有的 状态 加值
  Promise.allSettled([p2, p1, p3, "aaaa"]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log("err:", err)
  })
  