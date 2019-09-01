import { CAL_WIDTH } from '../lib/constant'

class CalendarEvent {
  constructor(_event) {
    this.init(_event)
  }
  init(_event) {
    let today = new Date()
    let base = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0, 0)
    let start = _event && _event.start
    let end = _event && _event.end

    if (start === undefined) {
      start = Math.ceil((today - base) / (60 * 1000))
    }
    if (end === undefined) {
      end = start + 30
    }

    this.id = (_event && _event.id) || ''
    this.start = start
    this.end = end

    this.top = start * 2
    this.left = 0
    this.width = CAL_WIDTH

    this.note = ''
    this.duration = end - start
    this.conflicts = []
  }
}

export default CalendarEvent
