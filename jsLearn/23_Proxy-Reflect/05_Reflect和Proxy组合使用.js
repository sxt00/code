const obj = {
    name:"why",
    age:18
}

const objProxy = new Proxy(obj,{
    get(target,key,receiver) {
        console.log(`-----get--------`);
        return Reflect.get(target,key)
    },
    set(target,key,newvalue,receiver) {
        console.log(`------set------`);
        target[key] = newvalue
        Reflect.set(target,key,newvalue)
    }
})

objProxy.name = 'kobe'
console.log(objProxy.name);