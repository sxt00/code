function add(x,y,z) {
    return x+y+z
}


function sum1(x) {
    return function(y) {
        return function (z) {
            return x+y+z
        }
    }
}
console.log(sum1(1)(2)(3))


var sum2 = x => y => z => x+y+z

console.log(sum2(1)(2)(3))
