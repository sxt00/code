const bar = () => {
    console.log(this,arguments);
}

bar()
console.log(bar.prototype)

// 箭头函数不能作为构造函数