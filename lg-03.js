// 组合函数
// 组合函数应只有一个参数
// 函数组合默认是从右到左执行
const compose = (...args) => {
  return (...newArgs) => args.reverse().reduce((result, item) => item(result), ...newArgs);
};

const fa = (a) => {
  return a + 1;
};
const fb = (a) => {
  return a * 2;
};
const fc = (a) => {
  return a - 1;
};

const test1 = compose(fa);
const test2 = compose(fb, fa);
const test3 = compose(fc, fb, fa);

console.log(test1(2), test2(2), test3(2));

// lodash的fp模式
// 自动柯理化,参数函数在前数据在后

// 函子

// class Container {
//   constructor(value){
//     this._value = value
//   }
//   operate(fn){
//     return new Container(fn(this._value))
//   }
// }

// let r = new Container(5).operate(x=>x+1).operate(x=>x*2)
// console.log(r);

//  面向对象转函数式
class Container {
  static of(value) {
    return new Container(value);
  }
  constructor(value) {
    this._value = value;
  }
  operate(fn) {
    return Container.of(fn(this._value));
  }
}

let r = Container.of(5)
  .operate((x) => x + 1)
  .operate((x) => x * 2);
console.log(r, r._value);

class MayBe {
  static of(value) {
    return new MayBe(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return MayBe.of(fn(this._value));
  }

  isNullOrUndefined() {
    return this._value ?? true;
  }
}

let ru = MayBe.of(undefined).isNullOrUndefined();
let r1 = MayBe.of(1).isNullOrUndefined();
let rn = MayBe.of(null).isNullOrUndefined();
console.log(ru, r1, rn);

// folktale
const { task } = require("folktale/concurrency/task");
const fs = require("fs");
const read = (filename) => {
  return task(({ resolve, reject }) => {
    console.log(2222);
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    }); 
  });
};

read("package.json")
  .map((x) => {
    console.log(1111);
    return 1;
  })
  .run();

// .listen({
//   onResolved: (data) => {
//     console.log(data);
//   },
//   onRejected: (err) => {
//     console.log(err);
//   },
// });


// 函子
// IO函子
// Monad单子函子(拥有of和join)
// 当一个函数返回函子的时候要想到Monad函子
// 当合并一个返回值的函数时,使用map
// 当合并一个返回函子的函数时,使用flatMap