/*
 * @Author: mellow
 * @Date: 2021-05-28 17:30:48
 * @LastEditors: mellow
 * @LastEditTime: 2021-05-28 18:33:44
 */
class Animal {
  name:string
  private color:string = 'blue'
  constructor(name:string){
    this.name = name
  }
  say(){
    console.log(`我是${this.name}`);
  }
  go(){
    console.log(`${this.name}跑了`); 
  }
}

class Cat extends Animal{
   weight:number
  legs:number = 4
   protected readonly long:number = 50
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
  howLong(){
    console.log(`${this.name}的长度是${this.long}cm`);
  }
  whatColor(){
    // console.log(`${this.name}的颜色是${this.color}`)
  }
}


let eleven = new Cat(3,'eleven')
eleven.go()
eleven.purr()
eleven.say()
eleven.cheng()
//属性“long”受保护，只能在类“Cat”及其子类中访问
// eleven.long   
eleven.howLong()



abstract class Adder {
  abstract x:number
  abstract y:number
  abstract add():number
  displayName='Adder'
  addTwice(){
    return (this.x+this.y)*2
  }
}

class NumAdder extends Adder{
  x: number;
  y: number;
  constructor(x:number,y:number){
    super()
    this.x = x
    this.y = y
  }
  add(){
    return this.x+this.y
  }
}