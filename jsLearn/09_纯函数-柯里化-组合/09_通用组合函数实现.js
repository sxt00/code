function myComf(...fns) {
    const length = fns.length
    if(length <=0) {
        throw new TypeError('There have at least one arguments ')
    }
    Array.prototype.slice
    fns = [].slice.call(fns)
    fns.forEach( item => {
        if(typeof item !== 'function') {
            throw new TypeError('Expected arguments are functions')
        }
    })

    return function (...args) {
        // args 为 输入
        let index = 0
        let res = fns[index](args)
        while(++ index < length) {
            res = fns[index](res)
        }
        return res
    }
}

function double(num) {
    return num*2
}

function square(num) {
    return num**2
}
const newF = myComf(1,double,square)

console.log(newF(10)); 