// 第一个参数依然是模块字符串中整个字符串, 只是被切成多块,放到了一个数组中
// 第二个参数是模块字符串中, 第一个 ${}

function foo(m,n,x) {
    console.log(m,n,x);
}

const name = 'why'
const age = 20

foo`Hello${name}Wor${age}ld`