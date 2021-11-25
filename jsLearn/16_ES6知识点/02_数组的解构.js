const names = ['a','b','c']

const [item1,item2,item3] = names
console.log(item1,item2,item3)
// 解构后面的元素
const [, , itemz] = names
console.log(itemz)
// 解构出一个元素,后面的元素放到一个新数组中
const [itemx, ...newNames] = names
console.log(itemx, newNames)