/* eslint no-restricted-globals:0 */

import CalendarEvents from './events/events';
import { Ruler } from './ruler';
import './calendar.style.css';
import calSvg from './calendar.svg';
import eventSvg from './events/event.svg';
import AddEventModal from './modal/add/add';
import CalendarEvent from './events/event';
class Calendar {
  constructor(_events) {
    this.events = new CalendarEvents(_events || []);
    this.modal = new AddEventModal(this.onSave.bind(this));
    window.onSave = this.onSave.bind(this);
  }

  onSave(e) {
    this.add({
      id: document.getElementById('title').value,
      start: document.getElementById('start').value,
      end: document.getElementById('end').value,
    });
    window.hide && window.hide();
  }
  add(_event) {
    this.events.add(_event);
    this.render();
  }

  renderRuler() {
    const ruler = new Ruler([
      '10:00 am',
      '11:00 am',
      '12:00 pm',
      '01:00 pm',
      '02:00 pm',
      '03:00 pm',
      '04:00 pm',
      '05:00 pm',
      '06:00 pm',
      '07:00 pm',
      '08:00 pm',
      '09:00 pm',
    ]);
    return ruler.render();
  }
  renderEvents() {
    let eventHtml = [];
    this.events.iterate(_event => {
      const { width, duration: height, top, left } = _event;
      const html = `<div
      class='event'
      style='width:${width}px;
      height: ${height * 2}px;
      margin-top: ${top}px;
      margin-left: ${left}px;'>
      <img src="${eventSvg}" />
      Meeting - ${_event.id}
      </div>`;
      eventHtml.push(html);
    });
    return eventHtml.join('');
  }

  render(element) {
    if (element) {
      this.element = element;
    }
    const Header = new Date().toDateString();
    this.element.innerHTML = `
      <div class="header"><img src="${calSvg}" /> ${Header}</div>
      <div class="calendar">
        ${this.renderRuler()}
        <div class="events" onclick="show()">
         ${this.renderEvents()}
        </div>
      </div>
      <div class="footer">${Header}</div>
      ${this.modal.render()}
    `;
  }
}

export default Calendar;
