/* eslint no-restricted-globals:0 */
// import '../modal.css'
import './add.css'
import CalendarEvent from '../../events/event'

window.show = function() {
  var ele = document.getElementById('add-event')
  ele.style.display = 'block'
  var _event = new CalendarEvent({ start: event.offsetY, end: 30 })
  document.getElementById('title').value = _event.id
  document.getElementById('start').value = _event.start
  document.getElementById('end').value = _event.end
  event.preventDefault()
}
window.hide = function() {
  var ele = document.getElementById('add-event')
  console.log(ele)
  ele.style.display = 'none'
}

export default class AddEventModal {
  constructor(onSave) {
    this.onSave = onSave || function() {}
  }
  hide() {
    window.hide && window.hide()
    // disable-eslint
    event.preventDefault()
  }

  show() {
    window.show && window.show()
  }

  render(event = new CalendarEvent()) {
    const { id = '', start = '', end = '' } = event
    return `<div class="modal" id="add-event" >
        <div class="modal-header">
            <div>Add event</div>
            <div class="close" onclick="hide()" >X</div>
        </div>
        <div class="modal-body">
            <form id="add-event-form" onsubmit="return false;">
                <label>Title</label>
                <input id="title" value="${id}" />
                <label>Start</label>
                <input id="start"  value="${start}"  />
                <label>End</label>
                <input id="end"  value="${end}"  />
            </form>
        </div>
        <div class="modal-footer">
            <button class="save" onclick="onSave()" >Save</button>
            <button class="cancel" onclick="hide()" >Cancel</button>
        </div>
    </div>`
  }
}
