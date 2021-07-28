/*
 * @Au,thor: mellow
 * @Date: 2021-05-11 14:31:29
 * @LastEditors: mellow
 * @LastEditTime: 2021-05-28 11:43:23
 */
function say(word:string) {
  console.log(word);
}
say('hello world')



class Animal {
  name:string
  constructor(name:string){
    this.name = name
  }
  say(){
    console.log(`我是${this.name}`);
  }
  go(){
    console.log('我跑了');
  }
}

class Cat extends Animal{
  weight:number
  constructor(weight:number,name:string){
    super(name)
    this.weight = weight
  }
  purr(){
    console.log(`${this.name}在叫`);
  }
  cheng(){
    console.log(`${this.name}现在${this.weight}kg`);
  }
}

let cat = new Animal('十一')
cat.say()
cat.go()

let eleven = new Cat(3,'eleven')
eleven.go()
eleven.purr()
eleven.say()
eleven.cheng()