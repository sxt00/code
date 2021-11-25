function double(num) {
    return num*2
}

function square(num) {
    return num**2
}

function composeFn(m,n) {
    return function(count) {
        return n(m(count))
    }
}

var newFn = composeFn(double, square)
console.log(newFn(10))