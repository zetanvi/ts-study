/*
 * @Author: mellow
 * @Date: 2021-08-06 15:45:09
 * @LastEditors: mellow
 * @LastEditTime: 2021-08-11 16:24:23
 */
{


  interface Mellow {
    name:string
    age:number
    todo?:string
  }
  interface Mellow2 {
    name:string
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


  type Omit =  Pick<Mellow, Exclude<keyof Mellow, 'todo'>>

  // keyof 获得的是接口属性的联合类型
  type Key = keyof Mellow  // 'age' | 'name' | 'todo'

  // 若T为联合类型则会分配式计算
  type diff = Exclude<'age' | 'name' | 'todo','todo'>


  // 交集
  type Extract<T,U> = T extends U ? T : never

  type And = Extract<keyof Mellow,'name'>

  // type和interface都可以表示对象类型
  type In<T,U> = {
    [K in Extract<keyof T,keyof U>] : T[K]
  }

  type AA = In<Mellow,Mellow2>

  interface NoNull {
    name:string
    age:null
    todo?:string
    kk:undefined
  }


  // 从   联合类型  中去除 null 或者 undefined 的类型
  type YY = NonNullable<string|number|null|undefined>

  // 在 TypeScript 中，keyof any 指代可以作为对象键的属性;目前，JavaScript 仅支持string、number、symbol作为对象的键值。
  type AllKey = keyof any  // string、number、symbol
















}