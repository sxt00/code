
setTimeout(() => {
    console.log(this);
}, 1000);

function mySetTimeout(fn,delay) {
    setTimeout(() => {
       fn.call('abc') 
    }, delay);
}

mySetTimeout( function(){
    console.log(this);
},1000)

const box = document.getElementsByClassName('box')

const boxDiv = document.querySelector('.box')
box[0].onclick = function () {
    console.log(this);
}

boxDiv.addEventListener('click', function() {
    console.log(this)
})

// 数组

const names = ['a','b','c','d']

names.forEach( function(item) {
    console.log(item,this);
},'abc')
names.forEach( item => {
    console.log(item,this); // window
},'abc')

names.filter( function (item){
    return item
},'sx')