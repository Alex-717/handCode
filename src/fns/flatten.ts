
/**
 * 数组扁平化 -- 一级扁平化
*/

export function flatten1 (array: any[]): any[] {
  let res: any[] = []

  array.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}


export function flatten2 (array: any[]): any[] {
  let res: any[] = []

  array.forEach(item => {
    res = res.concat(item)
  })

  return res
}



/**
 * 深度扁平化 flattenDeep
*/
export function flattenDeep (array: any[]): any[] {
  
}