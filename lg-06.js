// es6学习
console.log('es6')

let a = 'aaa'

console.log(a)

const arr = [1,2,3]
const [, , b,c=4] = arr
console.log(b,'bbbbbbb')
console.log(c,'ccccc')


let obj={
	name:'mellow',
	age:21
}
const {name:nickName,address:newAddress='SH'} = obj
console.log(nickName) // mellow
console.log(newAddress) // SH


// includes()

const str = 'h'
const includesStr = 'hello'.includes(str)
console.log(includesStr,'includesStr')

const startsWithStr = 'hello'.startsWith(str)
console.log(startsWithStr,'startsWithStr')

const endsWithStr = 'hello'.endsWith(str)
console.log(endsWithStr,'endsWithStr')

const newObj = {
	name:'mellow',
	method:function () {
		console.log(1,this)
	},
	method2(){
		console.log(2,this)
	},
	// 计算属性名,使用中括号包裹,key为计算后的值
	[1+2]:'??',
	[Math.random()]:'随机数'
}

// console.log(newObj)
// newObj.method()
// newObj.method2()

const assignObj = {
  name:'miniyellow',
  age:20
}

const assignRes = Object.assign(newObj,assignObj)

// console.log(newObj,assignObj,assignRes)

// proxy
const proxyObj = {
  name:'mellow',
  age:20
}

let proxy = new Proxy(proxyObj,{
  get(target,key){
    console.log(target,key,'get')
    return target[key]?target[key]:undefined
  },
  set(target,key,value){
    console.log(target,key,value,'set')
    target[key] = value
  }
})

proxy.name = 'p'
let l = proxy.age
console.log(proxy,'pppp')
console.log(proxyObj,'bbbb')

const keys = Object.keys(proxyObj)
console.log(keys,'keys')

const newKeys = Reflect.ownKeys(proxyObj)
console.log(newKeys,'newKeys')