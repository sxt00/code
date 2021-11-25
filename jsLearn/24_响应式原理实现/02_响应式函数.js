let reactiveFns = []
function watchFn(fn) {
    reactiveFns.push(fn)
}
// 响应式方法 push

const obj = {
    name:"why"
}
watchFn(function(){
    console.log(obj.name);
})

// if 发生响应

reactiveFns.forEach( fn => fn())