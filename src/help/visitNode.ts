
export function visitNode (n: Node): void{
  if (n instanceof Comment) { // 注释
    console.log('comment Node:', n.textContent)
  } else if (n instanceof Text) {
    console.log('Text Node:', n.textContent?.trim())
  } else if (n instanceof HTMLElement) {
    console.log('HtmlElement Node:', n.tagName.toLowerCase())
  }
}