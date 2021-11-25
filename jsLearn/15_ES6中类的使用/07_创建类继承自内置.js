class myArray extends Array {
    firstItem() {
        return this[0]
    }
    lastitem() {
        return this[this.length-1]
    }
}

var arr = new myArray(1,1,2,3,4)

console.log(arr.lastitem());