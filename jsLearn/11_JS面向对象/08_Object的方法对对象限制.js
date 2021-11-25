var obj = {
    age : 18,
    name:'ot'

}

// 禁止对象继续添加新的属性
Object.preventExtensions(obj)
obj.girl = 'ii'


// 禁止对象配置/删除 里面的属性
Object.seal(obj)
delete obj.age

// 让属性不可修改
Object.freeze(obj)
obj.name = 'ee'
console.log(obj);