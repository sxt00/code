// 通过原型链 访问 上面的属性
var obj = {
    name: "why",
    age: 18
  }
  
  obj.__proto__ = {
    address: "北京市"
  }
  
  console.log(obj)