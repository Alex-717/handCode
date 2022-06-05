
import { flatten1, flatten2, flattenDeep } from "./fns/flatten";
import { getType } from './fns/getType'
import { customNew } from "./fns/customNew";


// let arr = [11,[2,[3]],5, 8, [99, 100]]
// console.log('1', flatten1(arr))
// console.log('2', flatten2(arr))
// console.log('3', flattenDeep(arr))

// console.log('getType', getType([2121]))

class Foo{
  name: string
  age: number | string

  constructor(name: string) {
    this.name = name
    this.age = 18
  }
  
  getName () {
    return this.name
  }
}
let obj = customNew<Foo>(Foo, '红红')
console.log(obj)
console.log(obj.getName())