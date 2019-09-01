import IntervalTree from '../../../src/lib/interval/tree'

import assert from 'assert'

describe('Interval Tree', () => {
  let tree, conflicts
  let newNode = { id: 'New 6', start: 250, end: 300 }
  let events = [
    { id: 'New', start: 60, end: 120 },
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 2', start: 240, end: 300 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 4', start: 180, end: 330 },
  ]
  let expTreeOrder = [
    { id: 'New', start: 60, end: 120 },
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 4', start: 180, end: 330 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 2', start: 240, end: 300 },
  ]
  let expTreeOrderAfterAdd = [...expTreeOrder, newNode];

  let newNodeConflicts = [
    { id: 'New 1', start: 150, end: 270 },
    { id: 'New 2', start: 240, end: 300 },
    { id: 'New 3', start: 200, end: 360 },
    { id: 'New 4', start: 180, end: 330 },
  ]

  it('Create', () => {
    tree = new IntervalTree(events)
  })
  it('inorder', () => {
    let index = 0
    tree.inorder(function(_event) {
      assert.ok(expTreeOrder[index++].id === _event.id)
    })
  })
  it('findConflicts', () => {
    tree.findConflicts(newNode)
    conflicts = newNode.conflicts
    conflicts.forEach((event, index) => {
      assert.ok(newNodeConflicts[index].id === event.id)
    })
  })
  it('add', () => {
    var event = tree.insert(newNode)
    let index = 0
    tree.inorder(function(_event) {
      assert.ok(expTreeOrderAfterAdd[index++].id === _event.id)
    });
  })
});
