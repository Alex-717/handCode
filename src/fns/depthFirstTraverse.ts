
/**
 * @description deepFirstDom 深度优先遍历 - 递归
 * @param root Node
 * */ 

import { visitNode } from '../help/visitNode'


export function depthFirstTraverse (root: Node) {
  visitNode(root)
  
  let childNodes = root.childNodes
  childNodes.forEach(node => {
    depthFirstTraverse(node)
  })
}
