

/**
 * @description lazyMan
 * */ 

class LazyMan {
  tasks: Function[] = []
  name: string
  isRunning: boolean = false

  constructor (name: string) {
    this.name = name
  }
  checkRun () {
    if (!this.isRunning) this.next()
  }
  next () {
    let task = this.tasks.shift()
    if (task) { 
      this.isRunning = true
      task()
    } else {
      this.isRunning = false
    }
  }
  eat (food: string) {
    let task = () => {
      console.log(`${this.name} eat ${food}`)
      this.next()
    }
    this.tasks.push(task)
    this.checkRun()
    return this
  }
  sleep(s: number) {
    let task = () => {
      setTimeout(() => {
        console.log(`${this.name} slept for ${s} seconds`)
        this.next()
      }, s)
    }
    this.tasks.push(task)
    this.checkRun()
    return this
  }
}

let lazyMan = new LazyMan('红红')
lazyMan.eat('红薯').eat('西瓜').sleep(5000).eat('香蕉')