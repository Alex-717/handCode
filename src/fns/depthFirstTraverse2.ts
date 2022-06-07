
/**
 * @description deepFirstDom 深度优先遍历 - 非递归 - 栈
 * @param root Node
 * */ 
/**
 * 使用栈来实现。递归的底层也是使用栈来实现
 * */ 

import { visitNode } from '../help/visitNode'

export function depthFirstTraverse2 (root: Node) {
 
  let stack: Node[] = []
  stack.push(root)
  while (stack.length > 0) {
    let node = stack.pop()
    if (!node) break

    visitNode(node)
    let childNodes = node.childNodes
    if (childNodes.length) {
      // 重点：反顺序压栈
      Array.from(childNodes).reverse().forEach(item => stack.push(item))
    } 
  }

}
