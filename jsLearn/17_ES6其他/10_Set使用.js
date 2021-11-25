// set 类似数组  但是其都不重复

const set1 = new Set()
set1.add(10)
set1.add(20)
set1.add(40)
set1.add(333)
set1.add(10)
console.log(set1);

set1.add({})
set1.add({})
console.log(set1);
// size 属性
console.log(set1.size);

const arr = [33, 10, 26, 30, 33, 26]

console.log(new Set(arr));

// clear 清空
//set1.clear()
// delete
set1.delete(10)
console.log(set1);

// set 遍历
set1.forEach( item => {
    console.log(item);
})
for(const item of set1) {
    console.log(item);
}