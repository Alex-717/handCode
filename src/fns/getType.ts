
/**
 * @description 获取参数的详细的数据类型
*/
export function getType (x: any): string {
  return Object.prototype.toString.call(x).slice(8, -1).toLowerCase()
}