// flat 深度 遍历 然后重组
// const nums = [[10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]]
// console.log(nums.flat());  // [ 10, 20, [ 2, 9 ], [ [ 30, 40 ], [ 10, 45 ] ], 78, [ 55, 88 ] ]
// console.log(nums.flat(2)) // [ 10, 20, 2, 9, [ 30, 40 ], [ 10, 45 ], 78, 55, 88 ]
// console.log(nums.flat(3)) // 


//  flatmap

const nums2 = [10,20,30]
const newnums = nums2.flatMap( item => item*2)

console.log(newnums);

// 3.flatMap的应用场景
const messages = ["Hello World", "hello lyh", "my name is coderwhy"]
const words = messages.flatMap(item => {
  return item.split(" ")
})

console.log(words)