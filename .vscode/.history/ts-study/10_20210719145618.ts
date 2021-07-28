/*
 * @Author: mellow
 * @Date: 2021-06-15 16:20:10
 * @LastEditors: mellow
 * @LastEditTime: 2021-07-19 14:56:18
 */
function reflect(params:unknown){
  return params
}

const str = reflect('string')
const num = reflect(1)

function reflectp<P>(params:P){
  return params
}

console.log(str,num);