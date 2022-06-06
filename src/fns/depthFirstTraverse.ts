
/**
 * @description deepFirstDom 深度优先遍历
 * @param root Node
 * */ 

import { visitNode } from '../help/visitNode'


export function deepFirstDom (root: Node) {
  visitNode(root)
  
  let childNodes = root.childNodes
  childNodes.forEach(node => {
    deepFirstDom(node)
  })
}
