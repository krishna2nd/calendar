/* eslint no-restricted-globals:0 */
// import '../modal.css'
import './add.css';
import CalendarEvent from '../../events/event';

window.show = function() {
  var ele = document.getElementById('add-event');
  ele.style.display = 'block';
  ele.style.top = (window.scrollY || 0) + 100 + 'px';
  var _event = new CalendarEvent({ start: Math.floor(event.offsetY / 2) });
  document.getElementById('title').value = _event.id;
  document.getElementById('start').value = _event.start;
  document.getElementById('end').value = _event.end;
  event.preventDefault();
};
window.hide = function() {
  var ele = document.getElementById('add-event');
  ele.style.display = 'none';
};

window.onscroll = function() {
  if (window.scrollDebounce) clearTimeout(window.scrollDebounce);
  window.scrollDebounce = setTimeout(() => {
    var addEvent = document.getElementById('add-event');
    if (addEvent) addEvent.style.top = (window.scrollY || 0) + 100 + 'px';
  }, 100);
};

export default class AddEventModal {
  constructor(onSave) {
    this.onSave = onSave || function() {};
  }
  hide() {
    window.hide && window.hide();
    // disable-eslint
    event.preventDefault();
  }

  show() {
    window.show && window.show();
  }

  render(event = new CalendarEvent()) {
    const { id = '', start = '', end = '' } = event;
    return `<div class="modal" id="add-event" style="top:${(window.scrollY || 0) + 100 + 'px'}" >
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
    </div>`;
  }
}
