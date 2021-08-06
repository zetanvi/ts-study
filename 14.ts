/*
 * @Author: mellow
 * @Date: 2021-08-06 15:45:09
 * @LastEditors: mellow
 * @LastEditTime: 2021-08-06 18:31:17
 */
{


  interface Mellow {
    name:string
    age:number
    todo?:string
  }

  let mellow:Mellow = {
    name:'mellow',
    age:21
  }

  type PartialMellow = Partial<Mellow>

  let partailMellow:PartialMellow = {
    name:'partailMellow'
  }


  type RequiredMellow = Required<Mellow>

  let requiredMellow:RequiredMellow = {
    name:'requiredMellow',
    age:21,
    todo:'必需的'
  }


  type ReadonlyMellow = Readonly<Mellow>

  let readonlyMellow:ReadonlyMellow = {
    name:'readonlyMellow',
    age:21
  }

  // readonlyMellow.name = 'miniyellow'






















}