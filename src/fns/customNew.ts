
/**
 * @description customNew 手写new
 * 思路：
 * 1、创建一个空对象obj，继承构造函数的原型
 * 2、执行构造函数
 * 3、返回obj
 */
export function customNew<T>(fn: Function, ...args: any[]): T {
  let obj = Object.create(fn.prototype)
  fn.apply(obj, args)
  return obj
}

