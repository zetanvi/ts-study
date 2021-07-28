/*
 * @Author: mellow
 * @Date: 2021-05-31 10:25:03
 * @LastEditors: mellow
 * @LastEditTime: 2021-05-31 10:34:29
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