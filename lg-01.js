// function forEach(array, fn) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     fn(element);
//   }
// }

// forEach([1, 2, 3], (item) => {
//   console.log(item);
// });

// function once(fn) {
//   let isOnce = false;
//   return function () {
//     if (!isOnce) {
//       isOnce = true;
//       return fn.apply(this, arguments);
//     }
//   };
// }

// function onceFn(money) {
//   console.log(`今天挣了${money}元`);
// }
// let pay = once(function (money) {
//   console.log(`今天输了${money}元`);
// });
// pay(1);
// pay(2);
// pay(3);



// const arrowOnce = (fn)=>{
//   let isOnce = false
//   return (...arg)=>{
//     if(!isOnce){
//       isOnce = true
//       return fn(...arg)
//     }
//   }
// }

// let arrowPay = arrowOnce((money,name)=>{
//   console.log(`今天挣了${money}元,我叫${name}`);
// })

// arrowPay(100,'mellow')
// arrowPay(200,'mellow')
// arrowPay(300,'mellow')


let once = (fn)=>{
	let isOnce = false
	return (...arg)=>{
		if(!isOnce){
			isOnce = true
			return fn(...arg)
		}
	}
}

let func = (name,age)=>{
  console.log(`我叫${name},今年${age}`)
}

let getInfo = once(func)  // once只执行了一次,所以isOnce只初始化一次


// 下面执行的函数都是once函数中返回的函数
getInfo('mellow',20)  // 只执行这一次
getInfo('mellow1',21)
getInfo('mellow1',22)

let getInfo2 = once(func)

getInfo2('mellow',6)  // 只执行这一次
getInfo2('mellow1',7)
getInfo2('mellow1',8)



let menus = [
  {
    name:'mellow',
    children:[
      {
        name:'小黄',
        children:[
          {
            name:'biabia',
            children:[
              {
                name: '渣渣',
                children:[]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name:'mellow1',
    children:[
      {
        name:'小黄1',
        children:[
          {
            name:'biabia1',
            children:[
              {
                name: '渣渣1',
                children:[]
              }
            ]
          }
        ]
      }
    ]
  }
]
let newArr = []
let recursion = (arr)=>{
  arr.forEach(item=>{ 
    newArr.push(item.name)
    if(item.children.length>0){
      recursion(item.children)
    }
  })
}
recursion(menus)
console.log(newArr);