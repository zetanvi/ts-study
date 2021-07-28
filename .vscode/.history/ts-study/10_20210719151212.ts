/*
 * @Author: mellow
 * @Date: 2021-06-15 16:20:10
 * @LastEditors: mellow
 * @LastEditTime: 2021-07-19 15:12:12
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