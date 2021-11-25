const person = {
  name:'kobe',
  eating: function () {
    console.log(this.name+ '我在吃东西');
  }
}

person.eating();
