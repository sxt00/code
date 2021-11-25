


//  var b = () => console.log(this);
//  b()
function Foo (){
    getname = function () {
        console.log('f');
    }
}
Foo.getname = function () {
    console.log('1');
}
Foo.prototype.getname = function () {
    console.log('2');
}
new Foo.getname()
var f = new Foo()
console.log(f);
new Foo().getname()