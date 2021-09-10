/*
 * @Author: mellow
 * @Date: 2021-08-10 16:33:36
 * @LastEditors: mellow
 * @LastEditTime: 2021-09-10 18:31:40
 */
{

  type IsExtends<T> = T extends {name:infer N,age:infer A} ? [N,A] : number

  type Num = IsExtends<{name:'mellow'}>


  class Person {
    constructor(name: string, age?: number) {}
  }
  console.log(typeof Person);

  interface MixedObject {
    animal:{
      type:'animal' | 'cat' | 'dog'
      age:number
    }
    [name:number]:{
      type:string
      age:number
      nickname:string
    }
    [name:string]:{
      type:string
      age:number
    }
  }

  type animal = MixedObject['animal']
  type animalType = MixedObject['animal']['type']
  type numberIndex = MixedObject[number]
  type numberIndex12 = MixedObject[12]
  type stringIndex = MixedObject[string]
  type stringIndex12 = MixedObject['12']

  type Mixkey = keyof MixedObject


  let a = 'aaaaaa'

  let b = typeof a

  let c: typeof a = 'c'

  // 只是用extends是对类型进行约束，不符合约束类型会直接报错    
  type TargetGeneric<T extends string | number> = {
    [K in T] : string
  }

  type TargetT = TargetGeneric<'id'|12>


  // !==========================================================================



  interface StringIndexArray {
    [index:string] : string
  }

  type k1 = keyof StringIndexArray

  type k2 = StringIndexArray[0]


  function prop<T,K extends keyof T>(obj:T,k:K){
    return obj[k]
  }
  let mellow = {
    name:'mellow',
    age:1
  }
  prop(mellow,'name')
  prop(mellow,'age')



  // ! 泛型
  type isSubTyping<C,P> = C extends P ? true : false 
  type s1 = isSubTyping<1,number> // true
  type s2 = isSubTyping<number,1> // false

  // ! 条件类型
  type isAssertable<T,S> = T extends S ? true : S extends T ? true : false
  type a1 = isAssertable<1,number> // true
  type a2 = isAssertable<1,boolean> // false

  // ! 分配条件类型（分配式计算）
  type BooleanOrString = string | boolean
  type StringOrNumberArray<E> = E extends string | number ? E[] : E

  // 此时BooleanOrString会根据分配原则进行
  type WhatIsThis = StringOrNumberArray<BooleanOrString> // boolean | string[] 

  // 此时BooleanOrString作为一个整体和string | number比较
  type BooleanOrStringGot = BooleanOrString extends string | number ? BooleanOrString[] : BooleanOrString // string | boolean

  // 若使用泛型取整体要用[]给括起来
  type StringOrNumberArrayAll<E> = [E] extends [string | number] ? E[] : E
  type WhatIsThis2 = StringOrNumberArrayAll<BooleanOrString>

  // never类型陷阱, 
  // 1、never在泛型若以原子入参，则为false
  // 2、never在泛型若以整体入参，因为never 是所有类型的子类型所以为true
  type GetSNums = never extends number ? number[] : never extends string ? string[] : never  // number[]
  type GetNeverArray = StringOrNumberArrayAll<never> //never[]
  type GetNever = StringOrNumberArray<never> // never

  // !条件类型中的类型推断infer
  type ElementTypeOfArray<T> = T extends (infer E)[] ? E extends number ? true : E : T
  type isNumberArray = ElementTypeOfArray<number[]>
  type isOnlyNumber = ElementTypeOfArray<string>

  interface AA {
    name:string
    age:number
    todo:string
  }

  type ElementTypeOfObj<T> = T extends {name:infer N,age:infer A} ? [N,A] : never
  type GetNa = ElementTypeOfObj<AA>

























}