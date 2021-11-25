//  函数单一 职责 一个函数 只负责干一件事

function sum ( x) {
    x=x+2 
    return function(y){
        y = y*2
        return function(z) {
            return x+y +z*z
        }
    }
}
console.log(sum(10)(20)(30))
