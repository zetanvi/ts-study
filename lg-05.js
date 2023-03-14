// 实现promise
// new Promise((resolve,reject)=>{
//   reject('失败')
//   resolve('成功')
// })

const PADDING = "padding";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    fn(this.resolve, this.reject);
  }
  state = PADDING;
  value = undefined;
  reason = undefined;
  successCallback = []
  failCallback = []
  resolve = (value) => {
    if (this.state !== PADDING) return;
    this.state = FULFILLED;
    this.value = value;
    // this.successCallback && this.successCallback(this.value)
    while(this.successCallback.length) this.successCallback.shift()(this.value)
  };
  reject = (reason) => {
    if (this.state !== PADDING) return;
    this.state = REJECTED;
    this.reason = reason;
    // this.failCallback && this.failCallback(this.reason)
    while(this.failCallback.length) this.failCallback.shift()(this.reason)
  };
  then(successCallback, failCallback) {
    return new MyPromise((resolve,reject)=>{
      if (this.state === FULFILLED) {
        isPromise(successCallback(this.value),resolve,reject)
        // resolve(successCallback(this.value))
      } else if (this.state === REJECTED) {
        reject(failCallback(this.reason))
      }else{
        this.failCallback.push(failCallback)
        this.successCallback.push(successCallback)
      }
    })
  }
}

let isPromise = (x,resolve,reject)=>{
  if(x instanceof MyPromise){
    x.then(resolve,reject)
  }else{
    return x
  }
}

let promise = new MyPromise((resovle, reject) => {
  // setTimeout(() => {
    resovle(1);
  // }, 2000);
  // reject(2)
});

promise.then(
  (value) => {
    console.log(value, "成功啦1");
    return new MyPromise((resolve,reject)=>{
      resolve('??')
    })
  }
).then(res=>{
  console.log(res,222)
})




// 时间循环
console.log(111)
setTimeout(()=>{
  console.log(222)
  setTimeout(() => {
    console.log(333)
  }, 100);
},100)
queueMicrotask(()=>{
  console.log(444)
  queueMicrotask(()=>{
    console.log(555)
  })
})

queueMicrotask(()=>{
  console.log(777)
  setTimeout(() => {
    console.log('???')
  }, 202);
})
setTimeout(() => {
  console.log(888)
  queueMicrotask(()=>{
    console.log(999)
  })
}, 0);
console.log(1010101)

// 1,10,4,7,5,8,9,?,2,3