/*
 * @Author: mellow
 * @Date: 2021-07-28 14:20:18
 * @LastEditors: mellow
 * @LastEditTime: 2021-07-28 16:35:45
 */

{
// 类型守卫方法

  // 1.直接通过值来判断：switch、值
  const convert1 = (c:'a'|1)=>{
    switch (c) {
      case 'a':
          console.log('string:',c); 
        break;

      case 1:
          console.log('number:',c); 
        break;
    }

    if(c === 1){
      console.log('字面量number:',c);
    }else if(c === 'a'){
      console.log('字面量string:',c);
    }
  }

  convert1(1)  
  convert1('a')

  // 2. 类型判断：typeof
  const convert2 = (c:1|'a') =>{
    if(typeof c === 'string'){
      console.log('typeof:string',c)
    }else if(typeof c === 'number'){
      console.log('typeof:number',c);
    }
  }
  convert2(1)
  convert2('a')

  // 3. intenceof
  class Dog {
    wang="wangwang"
  }
  class Cat {
    miao="miaomiao"
  }
  const getName = (animal:Dog | Cat) =>{
    if(animal instanceof Dog){
      console.log('intanceof:',animal.wang);
    }else if(animal instanceof Cat){
      console.log('intanceof:',animal.miao);
    }
  }
  const dog = new Dog()
  const cat = new Cat()
  getName(dog)
  getName(cat)

  // 4. in  用来判断interface中的属性类型
  interface Dog {
    wang:string
  }
  interface Cat {
    miao:string
  }
  const getSound = (animal:Dog|Cat)=>{
    if('wang' in animal){
      console.log('in:wang',animal.wang);
    }else if('miao' in animal){
      console.log('in:miao',animal.miao);
    }
  }

  getSound(dog)
  getSound(cat)
}
