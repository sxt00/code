const obj = {
    name:'y',
    age:80,
    height:188
}

const entries = Object.entries(obj)
// console.log(entries);

// // 把 entires 的转化为 键值对 形式
// console.log(Object.fromEntries(entries));


// 2.Object.fromEntries的应用场景
const queryString = 'name=why&age=18&height=1.88'
const queryParams = new URLSearchParams(queryString)
for (const param of queryParams) {
  console.log(param)
}

const paramObj = Object.fromEntries(queryParams)
console.log(paramObj)
