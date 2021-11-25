const obj = {
    name:'why',
    age:18
}

Object.keys(obj).forEach(key => {
    let value = obj[key]

    Object.defineProperty(obj,key,{
        get() {
            console.log(`监测到${key}属性被访问了`);
            return value
        },
        set(newValue) {
            console.log(`监测到${key}属性被设置值`);
            value = newValue
        }
    })
})

obj.name = "kobe"
obj.age = 30

console.log(obj.name)
console.log(obj.age)

obj.height = 1.88