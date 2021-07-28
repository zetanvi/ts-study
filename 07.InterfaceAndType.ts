/*
 * @Author: mellow
 * @Date: 2021-05-31 10:25:03
 * @LastEditors: mellow
 * @LastEditTime: 2021-06-01 14:53:06
 */
interface Its {
  name:string
  age:()=>number
}

function Study(language: Its) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years ago.`);
}

let ts = {
  id:2,
  name:'TypeScript',
  age:()=>{
    return 11
  }
}

Study(ts)


interface LanguageRank {
  [rank:number] : string,
  43:string
}

interface LanguageYear {
  [name:string] : string |number
}

interface Oo extends LanguageRank {
  44:'cai'
}

type Ns = number | string

type Add = {name:string,age:number} & {name:string,high:number}

let adder:Add = {
  age:11,
  name:'eleven',
  high:22
}


let r:LanguageRank = {
  1:'ts',
  2:'js',
  3:'css',
  43:'rr'
}

let a:Oo = {
  43:'pubg',
  44:'cai'
}


let y :LanguageYear = {
  ts:'11',
  js:424
}









