
/**
 * @description 数组扁平化 -- 一级扁平化
*/
export function flatten1 (arr: any[]): any[] {
  let res: any[] = [] 
  
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })
  
  return res
}

export function flatten2 (arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    res = res.concat(item)
  });

  return res  
}


/**
 * @description 数组扁平化 -- 深度扁平化
*/
export function flattenDeep (arr: any[]): any[] {
  let res: any[] = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flattenDeep(item))
    } else {
      res.push(item)
    }
  })

  return res
}