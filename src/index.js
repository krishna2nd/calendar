import { Calendar } from './calendar';
import $ from './lib/dquery';

$(function() {
  let container = document.getElementById('calendar-panel');
  let calendar = new Calendar([
    { id: 'New 0', start: 60, end: 120 },
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 2', start: 240, end: 300 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 4', start: 180, end: 330 },
    // { id: 'New 5', start: 180, end: 330 },
    // { id: 'New 6', start: 180, end: 330 },
    // { id: "New 7", start: 314, end: 344 },
    // { id: "New 8", start: 342, end: 372 }
  ]);
  calendar.render(container);
  window.calendar = calendar;
});

//                      [60, 120](360)\
//                               [150, 270](360)\
//                                    [240, 300](360)
//                              [200, 360](360)/
//                        [180, 330](330)\
//                                      [180,330](330)\
//                                              [180,330](330)
