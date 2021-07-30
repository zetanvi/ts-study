/*
 * @Author: mellow
 * @Date: 2021-07-29 15:17:48
 * @LastEditors: mellow
 * @LastEditTime: 2021-07-30 16:58:31
 */

{
// 类型兼容
  let a = 111
  let b:never
  let c:unknown

  // a = b
  // b = a  报错：不能将类型“number”分配给类型“never”。ts(2322)
  // never 可以赋值给任何类型，不能被任何类型赋值
  

  // c = a 
  // a = c  报错：不能将类型“unknown”分配给类型“number”。ts(2322)
  // unknown 可以被任何类型赋值，不能赋值给除了any的其他类型

}

{
  interface IPar {
    name:string
  }

  interface IChild extends IPar{
    age:number
  }

  let Par:IPar = {
    name:'saobo'
  }
  let Child:IChild = {
    name:'mellow',
    age:22
  }

  Par = Child

  Par ={
    name:'mellow',
    age:22
  } as IChild



  console.log(Par,'pppppppppppp');













}