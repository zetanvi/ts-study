/*
 * @Author: mellow
 * @Date: 2021-06-01 14:53:22
 * @LastEditors: mellow
 * @LastEditTime: 2021-06-03 16:28:15
 */

type a = 'mini' | 'yellow'
type b = string
type c = a | b
let d:c = 'mii'



interface A {
  name:string
  age:number
}

interface B {
  high: number
  age:12
}

type C = A & B

let c:C = {
  name:'miniyellow',
  high:2,
  age:12
}

type UnionIntersection = { id: number; } & { name: string; }
type UnionIntersectionA = { id: number; } & { name: string; } | { id: string; } & { name: number; };

let union:UnionIntersectionA = {
  id:11,
  name:'miniyellow'
}
let union2:UnionIntersectionA = {
  id:'miniyellow',
  name:1
}


type color =  'red' | 'blue' | 'dark' | 'orange' | string &{}

let red:color = 'blue'


// type Some = {
//   num:1,
//   [prop:string]:string
// }

// 实现上述代码

// type Some = {num:number} | {num:never,[prop:string]:string}
type Some = {[prop:string]:string|number}

let some:Some = {
  num:222,
  age:'11'
}