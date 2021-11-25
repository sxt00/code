// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(11111)
    }, 2001);
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
  
  // race: 竞技/竞赛
// 只要有一个Promise变成fulfilled状态, 那么就结束
// 意外: 
  Promise.race([p1, p2, p3]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  