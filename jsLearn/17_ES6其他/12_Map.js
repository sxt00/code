const obj1 = {name:'why'}
const obj2 = {name:'kobe'}

// Map 允许把对象类型作为key
const map = new Map()
map.set(obj1,'aaa')
map.set(1,'444')
console.log(map);

const map2 = new Map([[obj1,'aaa'],[obj2,'bbb'],[2,'ccc']])

// 
console.log(map2.size);
console.log(map2.get(obj1));
console.log(map2.has('why'));
map2.delete(2)
console.log(map2);

// map2.clear()

// 遍历
map2.forEach( (value, key, map)=>{
    console.log(value,key,map);
})

for(const item of map2) {
    console.log(item);
}
for(const [key,value] of map2) {
    console.log(key,value);
}