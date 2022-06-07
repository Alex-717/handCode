

/**
 * @description breadthFirstTraverse  广度优先遍历
*/
/**
 * 使用队列来实现
 * */ 

import { visitNode } from "../help/visitNode"

export function breadthFirstTraverse(root: Node): void {
  let queue: Node[] = []
  queue.push(root)
  while (queue.length > 0) {
    const curNode = queue.pop() // 元素出栈
    if (!curNode) return
    visitNode(curNode)
    let childNodes = curNode.childNodes || []
    if (childNodes.length) {
      // 出栈元素的子元素进栈
      childNodes.forEach(node => queue.unshift(node))
    }
  }
}
