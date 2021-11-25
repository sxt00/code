const obj = {
    name:'why',
    age:18
}

const objProxy = new Proxy(obj,{
    get(target,key) {
        console.log(`检测到${key}`,target);
        return target[key]
    },
    set(target,key,newvalue) {
        console.log(`监测到${key}`,target);
        target[key] = newvalue
    }

})

console.log(objProxy.name);

objProxy.name = 'ooo'

console.log(objProxy.name);

