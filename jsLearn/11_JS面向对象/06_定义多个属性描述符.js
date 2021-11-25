var obj = {
    _age : 18,

}

Object.defineProperties(obj,{
    name:{
        configurable: true,
        enumerable:true,
        writable:true,
        value:"tom"
    },
    age: {
        configurable: true,
        enumerable: true,
        get: function() {
        return this._age
        },
        set: function(value) {
        this._age = value
        }
    }
})

console.log(obj);
obj.age = 19
console.log(obj.age)
