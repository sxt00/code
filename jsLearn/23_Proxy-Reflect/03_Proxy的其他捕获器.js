const obj = {
    name:'why',
    age:18
}

const objProxy = new Proxy(obj,{
    // 获取值
    get(target,key) {
        console.log(`检测到${key}`,target);
        return target[key]
    },
    // 设置值 
    set(target,key,newvalue) {
        console.log(`监测到${key}`,target);
        target[key] = newvalue
    },
    has(target,key) {
        console.log(`监测到${key}in操作`,target);
        return key in target
    },
    deleteProperty(target,key) {
        console.log(`监听对象的${key}delete操作`,target);
        delete target[key]
    }
})

console.log(objProxy.name);
objProxy.name = 'ooo'
console.log('name' in objProxy);
delete objProxy.name

