import CalendarEvent from '../../src/calendar/events/event'
import { CAL_WIDTH } from '../../src/lib/constant';
import assert from 'assert'
import { isNumber } from 'util';

describe('CalendarEvent', () => {
  it('Create (data1)', () => {
    const data = { id: 'id', start: 1, end: 2 };
    const event = new CalendarEvent(data);
    assert.equal(event.id, data.id);
    assert.equal(event.start, data.start)
    assert.equal(event.end, data.end)

    assert.equal(event.top, data.start * 2)
    assert.equal(event.left, 0)
    assert.equal(event.width, CAL_WIDTH)

    assert.equal(event.note, '')
    assert.equal(event.duration, data.end - data.start)
    assert.ok(Array.isArray(event.conflicts));
  });
  it('Create (data2)', () => {
    const data = { id: 'id', start: 0, end: 0 };
    const event = new CalendarEvent(data);
    assert.equal(event.id, data.id);
    assert.equal(event.start, data.start)
    assert.equal(event.end, data.end)

    assert.equal(event.top, data.start * 2)
    assert.equal(event.left, 0)
    assert.equal(event.width, CAL_WIDTH)

    assert.equal(event.note, '')
    assert.equal(event.duration, data.end - data.start)
    assert.ok(Array.isArray(event.conflicts));
  })
  it('Create ()', () => {
    const event = new CalendarEvent()
    assert.equal(event.id, '');
    assert.ok(isNumber(event.start));
    assert.ok(isNumber(event.end));

    assert.equal(event.top, event.start * 2);
    assert.equal(event.left, 0);
    assert.equal(event.width, CAL_WIDTH);

    assert.equal(event.note, '');
    assert.equal(event.duration, event.end - event.start);
    assert.ok(Array.isArray(event.conflicts));
  })
})
