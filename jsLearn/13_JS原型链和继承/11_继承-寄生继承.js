var perObj = {
    running : function () {
        console.log('running');
    }
} 

function createStudent(name) {
    var stu = Object.create(perObj)
    stu.name = name
    stu.study = function (){
        console.log('study');
    }
    return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")
console.log(stuObj.running());
console.log(stuObj1);
console.log(stuObj2);