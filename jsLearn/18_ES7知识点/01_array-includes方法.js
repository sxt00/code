const names = ['a','b','c',NaN]
if(names.indexOf('c') !==-1) {
    console.log(names.indexOf('c'));
}


console.log(names.includes('b',1));

console.log(names.includes(NaN));