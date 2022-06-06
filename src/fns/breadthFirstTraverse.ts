

/**
 * @description breadthFirstTraverse  广度优先遍历
*/

import { visitNode } from "../help/visitNode"

export function breadthFirstTraverse(root: Node): void {
  let queue: Node[] = []
  queue.push(root)
  while (queue.length > 0) {
    const curNode = queue.pop()
    if (!curNode) return
    visitNode(curNode)
    let childNodes = curNode.childNodes || []
    if (childNodes.length) {
      childNodes.forEach(node => queue.unshift(node))
    }
  }
}
