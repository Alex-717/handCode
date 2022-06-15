
class EventBus {
  private events:{
    [key: string]: Array<{fn: Function, isOnce: boolean}>
  }
  constructor () {
    this.events = {}
  }
  on (eventType: string, fn: Function, isOnce: boolean) {
    if (!eventType || !fn) return 
    
    if(!this.events[eventType]) this.events[eventType] = []
    this.events[eventType].push({
      fn,
      isOnce
    })
  }
  once (eventType: string, fn: Function) {
    this.on(eventType, fn, true)
  }
  off (eventType: string, fn?: Function) {
    if (!eventType) return

    if (!fn) {
      this.events[eventType] = []
      return
    }
    this.events[eventType] = this.events[eventType].filter(item => item.fn !== fn)
  }
  emit (eventType: string, ...args: any[]) {
    if (!eventType) return

    this.events[eventType] = this.events[eventType].filter(item => {
      let { fn, isOnce } = item
      fn(...args)

      if (isOnce) return false
      return true
    })
  }
}