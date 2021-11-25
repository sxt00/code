var bar
function foo (x) {
    function bar () {
        console.log(x);
    }
    bar()
}


foo(8)