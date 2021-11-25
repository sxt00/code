const obj1 = {}
const obj2 = {}


function f1() {
    console.log('1-----------');
}
function f2() {
    console.log('2-----------');
}
function f3() {
    console.log('3-----------');
}
function f4() {
    console.log('4-----------');
}

const weakmap = new WeakMap()

const obj1map = new Map()
obj1map.set('name',[f1,f2])
obj1map.set('age',[f3])

const obj2map = new Map()
obj2map.set('name',[f3,f4])

weakmap.set(obj1,obj1map)
weakmap.set(obj2,obj2map)

obj1.name = '123'

weakmap.get(obj1).get('name').forEach( fn => fn())
weakmap.get(obj1).get('age').forEach( fn => fn())
weakmap.get(obj2).get('name').forEach( fn => fn())
