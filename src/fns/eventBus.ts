
export default class EventBus {
  private events:{
    [key: string]: Array<{fn: Function, isOnce: boolean}>
  }

  constructor () {
    this.events = {}
  }

  on (type: string, fn: Function, isOnce: boolean) {
    if (!type || !fn) return 
    
    if(!this.events[type]) this.events[type] = []
    this.events[type].push({
      fn,
      isOnce
    })
  }

  once (type: string, fn: Function) {
    this.on(type, fn, true)
  }

  off (type: string, fn?: Function) {
    if (!type) return

    if (!fn) {
      this.events[type] = []
      return
    }
    this.events[type] = this.events[type].filter(item => item.fn !== fn)
  }
  
  emit (type: string, ...args: any[]) {
    if (!type) return

    this.events[type] = this.events[type].filter(item => {
      let { fn, isOnce } = item
      fn(...args)

      if (isOnce) return false
      return true
    })
  }
}