import { Calendar } from './calendar';
import $ from './lib/dquery';

$(function() {
  let container = document.getElementById('calendar-panel');
  let calendar = new Calendar([
    { id: 'New 0', start: 60, end: 120 },
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 2', start: 240, end: 300 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 4', start: 180, end: 330 }
  ]);
  calendar.render(container);
  window.calendar = calendar;
});
