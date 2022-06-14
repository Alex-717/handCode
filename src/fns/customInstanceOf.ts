
export function customInstanceOf (obj: any, origin: any): boolean {

  if (obj == null) return false
  if (typeof obj !== 'object' || typeof origin != 'function') return false 

  let tempInstance = obj
  while(tempInstance) {
    if (tempInstance.__proto__ === origin.prototype) {
      return true
    } else {
      tempInstance = tempInstance.__proto__
    }
  }

  return false
}

// 功能测试
// class Person {
//   constructor (name: String) {
//     console.log(name)
//   }
// }

// class Student {
//   constructor (name: String) {
//     console.log(name)
//   }
// }

// let obj = new Student('eson')

// console.log(customInstanceOf(obj, Person))
