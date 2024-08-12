import { Subject } from "rxjs"

export class Loading extends Subject<boolean> {
  private static instance: Loading

  private constructor() {
    super()
  }

  static getInstance(): Loading {
    if (!Loading.instance) {
      Loading.instance = new Loading()
    }
    return Loading.instance
  }

  enable() {
    this.next(true)
  }

  disabled() {
    this.next(false)
  }
}
