/**
 * customBind
*/

// @ts-ignore
Function.prototype.customBind = function (context: any, ...args: any[]): Function {
  let self = this
  let ctx = context || globalThis
  return function (...newArgs: any[]) {
    self.apply(ctx, args.concat(newArgs))
  }
}

// 功能测试
// function fn(a: number, b: number, c: number) {
//   // @ts-ignore
//   console.log(this, a, b, c)
// }

// // @ts-ignore
// let fn1 = fn.customBind(null, 10, 20)
// fn1(30)