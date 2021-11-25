/**
 * resolve(参数) 
 *  1.普通参数 peding ----- fulfilled
 *  2. promise
 *      当前的promise的状态会由传入的promise来决定 状态移交
 *  3. 传入一个对象  这个对象有 then 方法
 *      执行该then 方法 由then方法决定
 *       
 */


 new Promise((resolve,reject) => {
    const obj = new Promise((resolve,reject)=>{
        reject('b')
        resolve('a')
    })
    resolve(obj)
} ).then(res => console.log(res) , err => console.log('err'+'  ',err))




new Promise((resolve,reject) => {
    const obj = {
        then: function(resolve,reject) {
            reject('reject')
        }
    }
    resolve(obj)
} ).then(res => console.log(res) , err => console.log('err'+'  ',err))