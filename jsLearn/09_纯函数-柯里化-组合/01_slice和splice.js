const names = ['a','b','c','d','e']


// slice 传入 参数 start/end  默认值 (0,length) 会根据 这个长度来取 复制一个新的 数组


console.log(names.slice(1,5))
console.log(names)

// splice  传入多个个参数 第一个参数会 开始位置 第 2 个参数为在这个位置是依次删除几个元素 会把这段截取出来 留下被截取后的数组
// 后面的 items  会在第一个参数的位置 依次插入
var newnames = names.splice(1,8,'s','t')

console.log(newnames)
console.log(names)

