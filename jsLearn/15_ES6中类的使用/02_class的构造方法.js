class Person {
    // 类的构造方法
    // 1. 在内存中创建一个对象
    // 2. 将类的原型 prototype 赋值给创建出来的对象
    // 3. 将对象赋值给函数的 this ： new 绑定
    // 4. 执行函数体中的代码
    // 5. 自动返回创建出来的对象
    constructor (name,age) {
        this.name = name
        this.age = age
    }
}