var obj = {
    name:'pp',
    age:20
}
var info = Object.create(obj,{
    address: {
        value:'北京',
        enumerable:true,
    }
})

console.log(obj);
console.log(info);

console.log(obj.hasOwnProperty("address"))

console.log("address" in info)
console.log("name" in info)

for(var key in info) {
    console.log(key);
}