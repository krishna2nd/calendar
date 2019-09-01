import CalendarEvent from './event'
import IntervalTree from '../../lib/interval/tree'
import { CAL_WIDTH } from '../../lib/constant'

class CalendarEvents {
  constructor(_events) {
    var __events = _events.map(function(_event) {
      if (!(_event instanceof CalendarEvent)) {
        return new CalendarEvent(_event)
      }
      return _event
    })

    this.tree = new IntervalTree(__events)
    this.calcUIPosition()
  }

  add(_event) {
    var __event = _event
    if (!(_event instanceof CalendarEvent)) {
      __event = new CalendarEvent(_event)
    }
    this.tree.insert(__event)
    this.calcUIPosition()
    // this.findConflicts(__event);
  }

  findConflicts(_event) {
    _event.conflicts = []
    var sortEvents = function(event1, event2) {
      if (event1.start !== event2.start) {
        return event1.start - event2.start
      }
      return event2.end - event1.end
    }

    this.tree.findConflicts(_event)
    var conflicts = _event.conflicts
    if (conflicts && conflicts.length) {
      _event.conflicts = conflicts
      _event.width = CAL_WIDTH / (conflicts.length + 1)
      var left = 0
      var incLeft = _event.width

      ;[]
        .concat(_event, _event.conflicts)
        .sort(sortEvents)
        .forEach(_event => {
          _event.left = left
          left += incLeft
        })
    }
    // console.log(
    //   '[' +
    //     _event.start +
    //     ', ' +
    //     _event.end +
    //     '] duration = ' +
    //     _event.duration +
    //     ' width=' +
    //     _event.width +
    //     ' conflict=' +
    //     _event.conflicts.length +
    //     ' left=' +
    //     _event.left
    // )
  }

  calcUIPosition() {
    this.iterate(this.findConflicts.bind(this))
  }
  iterate(callback) {
    this.tree.inorder(callback)
  }
}

export default CalendarEvents
