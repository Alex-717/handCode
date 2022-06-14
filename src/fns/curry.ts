
/**
 * @description curry
*/
export function curry (fn: Function) {
  let fnArgsLen = fn.length
  let totalArgsArray: any[] = []
  function newFun (this: any, ...args: any[]) {
    totalArgsArray = totalArgsArray.concat(args)
    if (totalArgsArray.length < fnArgsLen) {
      return newFun
    }
    return fn.apply(this, totalArgsArray.slice(0, fnArgsLen))
  }
  return newFun
}


// 功能测试
// function add (a: number, b: number, c: number): number {
//   return a + b + c
// }

// let curryAdd = curry(add)

// let res = curryAdd(5)(2)(3)
// console.log(res)