function foo (...arg) {
console.log(arg);
}

const fooProxy = new Proxy(foo,{
    apply(target,thisArg,argArray) {
        console.log(`apply`);
        return target.apply(thisArg,argArray)
    },
    construct(target,argArray,newTarget) {
        console.log(`new`);
        return new target(...argArray)
    }
})

fooProxy.apply({},[1,2,30])

new fooProxy('1','2')