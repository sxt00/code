const nums = [5,40,10,100,11,55]


//1.filter 过滤
/*
const newNums = nums.filter( function (item){
  return item % 2 === 0 // 整除
})
*/

// 2. map 映射
/*
const newNums = nums.map( function (item) {
  return item*10
})
*/

// 3.forEach 迭代

/*
nums.forEach( function (item) {
  console.log(item)
})
*/

// 4. find / findIndex
var item = nums.find(function(item) {
  return item === 11
})
var friends = [
  {name: "why", age: 18},
  {name: "kobe", age: 40},
  {name: "james", age: 35},
  {name: "curry", age: 30},
]

var findFriend = friends.find(function(item) {
  return item.name === 'james'
})
var friendIndex = friends.findIndex(function(item) {
  return item.name === 'james'
})
console.log(friendIndex)
console.log(findFriend)
console.log(item)
console.log(nums)
//console.log(newNums)
var total = nums.reduce(function(prevValue, item) {
  return prevValue + item
}, 0)
console.log(total)
