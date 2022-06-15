// @ts-ignore
Function.prototype.customCall = function(context: any, ...args: any[]) {
  if (context == null) context = globalThis
  if (typeof context !== 'object') context = new Object(context)

  const fnKey = Symbol()
  context[fnKey] = this
  const res = context[fnKey](...args)

  delete context[fnKey] // 删除新增的属性，防止污染

  return res
}