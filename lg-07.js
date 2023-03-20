// class

class Mellow {
  #p = 1
  // 静态方法,里面this指向类而不是实例
  static create(name) {
    return new Mellow(name)
  }
  constructor(name) {
    this.name = name
    console.log(this.name, 'this.name', this.#p)
  }
  say() {
    console.log(`hi,我是${this.name}`)
  }
}

let mellow = new Mellow('mellow')
mellow.say()
let tom = Mellow.create('tom')
tom.say()

class Miniyellow extends Mellow {
  constructor(name, num) {
    // console.log(super(name))
    super(name) // supper指向父类
    this.num = num
  }
  giveMeFive() {
    super.say()
    console.log(`给我${this.num}次five,#p:`)
  }
}
let miniyellow = new Miniyellow('miniyellow', 5)
miniyellow.giveMeFive()

// set
const s = new Set()
s.add({ age: 1 }).add({ age: 2 }).add({ age: 3 })
console.log(s, 'sssssss')
console.log(s.has({ age: 1 }))
console.log(s.add({ age: 1 }))
console.log(s.delete({ age: 1 }))

// for of  只能遍历含有iterable接口的数据类型(Set Map Array),对象不行
let m = new Map()
m.set(Symbol('foo'), 'foo')
m.set(12, 12)
console.log(m, 'mmmmmmm')
for (const [key, value] of m) {
  console.log(key, value)
}

let obj = {
  name: 'mellow',
  age: 29,
}

obj[Symbol.iterator] = () => {
  let keys = Object.keys(obj)
  let i = 0
  return {
    next() {
      const res = {
        value: [keys[i], obj[keys[i]]],
        done: i >= keys.length,
      }
      i++
      return res
    },
  }
}

for (const iterator of obj) {
  console.log(iterator, '???') // 报错:obj is not iterable
}

// let arr =[1,2,3]
// let ifunc = arr[Symbol.iterator]()
// console.log(ifunc.next())
// console.log(ifunc.next())
// console.log(ifunc.next())
// console.log(ifunc.next())


// console.log(Math.pow(2,10))
// console.log(2**4)
console.log(Object.entries(obj))  // 返回键值对的二维数组
for (const iterator of Object.entries(obj)) {
  console.log(iterator,'entries')
} 

const em = new Map(Object.entries(obj))
for (const iterator of em) {
  console.log(iterator,'em')
}

let strs = ['1','22213','341']
for (const item of strs) {
  console.log(item.padStart(10,' '))
  console.log(item.padEnd(10,'?'))
  console.log(item)
}