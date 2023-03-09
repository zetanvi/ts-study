// 模拟map、every、some
const map = (array,fn)=>{
  let newArray = []
  for (const value of array) {
    newArray.push(fn(value))
  }
  return newArray
}

let arr = map([1,2,3],(item)=>{
  return item+1
})

console.log(arr);

const every = (array,fn)=>{
  let bool = true
  for (const value of array) {
    if(!fn(value)){
      bool = false
      break
    }
  }
  return bool
}

const eb1 = every([1,2,3],(item)=>{
  return item>1
})
const eb2 = every([2,3,4],(item)=>{
  return item>1
})
console.log(eb1,eb2);

const some = (array,fn)=>{
  let bool = false
  for (const value of array) {
    if(fn(value)){
      bool = true
      break
    }
  }
  return bool
}

const sb1 = some([1,2,3],(item)=>{
  return item>1
})
const sb2 = some([0,0,0],(item)=>{
  return item>1
})
console.log(sb1,sb2);


// 闭包 
// 一个函数A中的返回值为函数B,且函数B中使用到函数A中定义的变量a或参数,
// 这样函数A中的变量a或参数就无法被垃圾回收,这就叫闭包
const makeSalary = (level)=>{
  // level 1:10000 2:20000 3:30000
  let baseSalary = 0
  switch (level) {
    case 1:
      baseSalary = 10000
      break;
    case 2:
      baseSalary = 20000
      break;
    case 3:
      baseSalary = 30000
      break;
  }
  return (performance)=>{
    return baseSalary + performance
  }
}

const getLevel1 = makeSalary(1)
const getLevel2 = makeSalary(2)
const getLevel3 = makeSalary(3)

console.log(getLevel1(2000));
console.log(getLevel2(1000));
console.log(getLevel3(9000));


// lodash 使用
const _ = require('lodash')
// console.log(_);
let sum = _.reduce([1,2,3,4],(prev,curr)=>{
  return prev+curr
})
console.log(sum);

const reduce = (array,fn,initial)=>{
  let res
  if(initial){
    res = initial
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    res = fn(res,element,i,array)
  }
  return res
}

const r1 = reduce([1,2,3],(res,item)=>{
  return res+item
},100)

console.log(r1);

const r2 = reduce([{name:'mellow',age:12},{name:'cat',age:24},{name:'bobo',age:39}],(res,item)=>{
  return {name:item.name+(res.name||''),age:item.age+res.age||0}
},{})
console.log(r2);


// 函数柯理化:先接收前部参数,返回一个新的函数去接受剩余的参数,最后返回一致的结果
// 实现sum(1,2,3) sum(1,2)(3) sum(1)(2)(3) 都返回6
let sumc = (a,b,c)=>{
  return a+b+c
}
console.log(sumc.length,'???');

const currySum = (fn)=>{
  let curriedFn = (...args)=>{
    if(args.length<fn.length){
      return (...newArgs)=>{
        return curriedFn(...args,...newArgs)
      }
    }else{
      return fn(...args)
    }
  }
  return curriedFn
}

let newSumc = currySum(sumc)

console.log(newSumc(1,2,3));
console.log(newSumc(1)(2,3));
console.log(newSumc(1)(2)(3));


let currySum6 = (...args)=>{
  if(args.length<3){
    return (...newArgs)=>{
      return currySum6(...args,...newArgs)
    }
  }else{
    return args.reduce((prev,item)=>{
      return prev + item
    })
  }
}

console.log(currySum6(1,2,3));
console.log(currySum6(1)(2,3));
console.log(currySum6(1)(2)(3));
