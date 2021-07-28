/*
 * @Author: mellow
 * @Date: 2021-06-15 16:20:10
 * @LastEditors: mellow
 * @LastEditTime: 2021-07-28 11:06:13
 */


const str = reflect('string')
const num = reflect(1)

function reflect<P>(param: P):P {
  return param;
}

console.log(str,num);

type GenericReflectFunction<P> = (param: P) => P;
interface IGenericReflectFunction<P> {
  (param: P): P;
}

let reflectFn4:GenericReflectFunction<string> = reflect

let fn4 = reflectFn4('mellow')
console.log(fn4);

let reflectFn5:IGenericReflectFunction<number> = reflect

let fn5 = reflectFn5(1063813250)
console.log(fn5);


type SorN = string | number

type SorB = string | boolean

type TypeFn6<E> = E extends SorN ? E[] : string

type TypeFn7<SorB> = SorB extends SorN ? SorB[] : string

type Bo = TypeFn7<SorB>


