import CalendarEvents from '../../src/calendar/events'
import CalendarEvent from '../../src/calendar/event';
import assert from 'assert'
import { isNumber } from 'util'

describe('CalendarEvents', () => {
  let data = () => [
    new CalendarEvent({ id: 'New', start: 60, end: 120 }),
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 2', start: 240, end: 300 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 4', start: 180, end: 330 },
    { id: 'New 5', start: 180, end: 331 },
  ]
  let newNode = () => ({ id: 'Added1', start: 100, end: 360 })
  let nodeOrder = ['New', 'New 1', 'New 4', 'New 5', 'New 3', 'New 2']
  let nodeOrderAfterAdd = ['New', 'Added1', 'New 1', 'New 4', 'New 5', 'New 3', 'New 2']

  // it('Create', () => {
  //   let events = new CalendarEvents(data())
  //   let index = 0
  //   events.tree.inorder(e => assert.ok(e.id === nodeOrder[index++]))
  // })
  // it('add', () => {
  //   let events = new CalendarEvents(data())
  //   events.add(newNode())
  //   let index = 0
  //   events.tree.inorder(e => assert.ok(e.id === nodeOrderAfterAdd[index++]))
  // })
  // it('findConflicts', () => {
  //   let events = new CalendarEvents(data())
  //   let event = newNode()
  //   const expected = ['New', 'New 1']
  //   events.findConflicts(event)
  //   event.conflicts.forEach((e, index) => assert.ok(e.id === expected[index]))
  // })
  // it('calcUIPosition', () => {
  //   let _data = data()
  //   let position = [[0, 120], [0, 300], [240, 360], [120, 360], [360, 400], [480, 480]]
  //   let index = 0
  //   let events = new CalendarEvents(_data)
  //   events.calcUIPosition()
  //   events.tree.inorder(d => {
  //     assert.ok(position[index][0] === d.left && position[index][1] === d.top)
  //     index++
  //   })
  // })
  it('calcUIPosition After Add', () => {
    let index = 0,
      position = [[0, 120], [0, 240], [0, 300], [240, 360], [120, 360], [360, 400], [480, 480]]
    let events = new CalendarEvents(data())
    console.log("--------------------------")
    events.add(new CalendarEvent(newNode()))
    console.log("--------------------------")
    // events.tree.inorder(d => {
    //   assert.ok(position[index][0] === d.left && position[index][1] === d.top)
    //   index++
    // })
  })
})
