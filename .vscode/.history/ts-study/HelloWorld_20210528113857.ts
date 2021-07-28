/*
 * @Au,thor: mellow
 * @Date: 2021-05-11 14:31:29
 * @LastEditors: mellow
 * @LastEditTime: 2021-05-28 11:38:57
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
  purr(){
    console.log(`${this.name}在叫`);
  }
}

let cat = new Animal('十一')
cat.say()
cat.go()

let elevent = new Cat('elevent')
elevent.go()
elevent.purr()
elevent.say()