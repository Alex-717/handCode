
/**
 * @description 深度扁平化 flattenDeep
 * @author alex
 * 思路：先实现一级扁平，然后递归。直到全部扁平
 */

/**
 * 使用数组 -- push
 * @param array
*/
export function flattenDeep1 (array: any[]): any[] {
  let res: any[] = []
  array.forEach(item => {
    if(Array.isArray(item)) {

      // 如果是数组，递归。然后push到res中
      let flatItem = flattenDeep1(item)
      flatItem.forEach(n => res.push(n))

    } else {
      res.push(item)
    }
  })
  return res
}


/**
 * 使用concat
 * @param array
*/
export function flattenDeep2(array: any[]): any[] {
  let res: any[] = []

  array.forEach(item => {
    
    if (Array.isArray(item)) {
      let flatItem = flattenDeep2(item)
      res = res.concat(flatItem)
    } else {
      res = res.concat(item)
    }
  })  

  return res
}
