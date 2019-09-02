import IntervalNode from './node';

class IntervalTree {
  constructor(_events) {
    this.root = undefined;
    for (let index = 0; index < _events.length; index++) {
      let _event = _events[index];
      this.root = this.insert(_event);
    }
    // console.log(JSON.stringify(this.root));
  }
  insert(inEvent) {
    const _insert = function(root, _event) {
      if (!root) return new IntervalNode(_event);

      let start = root.event.start;

      if (_event.start < start) {
        // console.error('Moving left', _event.start, _event.end, ' Root- ', start);
        root.left = _insert(root.left, _event);
      } else {
        // console.error('Moving right', _event.start, _event.end, ' Root- ', start);
        root.right = _insert(root.right, _event);
      }

      if (root.maxEnd < _event.end) root.maxEnd = _event.end;
      // console.log('maxEnd', root.maxEnd);

      return root;
    };
    // console.error('\nInserting', inEvent.start, inEvent.end);
    return _insert(this.root, inEvent);
  }

  findConflicts(_event) {
    // console.log("Conflict" , _event)
    _event.conflicts = [];
    const checkConflict = function(e1, e2) {
      if (e1.id === e2.id) return false;
      // console.log(
      //   e1.id,
      //   e2.id,
      //   e1.start,
      //   e1.end,
      //   e2.start,
      //   e2.end,
      //   e1.start <= e2.end,
      //   e2.start <= e1.end
      // )
      return e1.start <= e2.end && e2.start <= e1.end;
    };
    var searchEventConflicts = function(root, _event) {
      if (!root) return undefined;

      if (checkConflict(root.event, _event)) {
        _event.conflicts.push(root.event);
      }

      if (
        root.left &&
        root.left.maxEnd >= _event.start &&
        (root.right && root.right.maxEnd >= _event.start)
      ) {
        searchEventConflicts(root.left, _event);
        searchEventConflicts(root.right, _event);
        return;
      }

      if (root.left && root.left.maxEnd >= _event.start) {
        return searchEventConflicts(root.left, _event);
      }

      return searchEventConflicts(root.right, _event);
    };
    return searchEventConflicts(this.root, _event);
  }

  inorder(callback) {
    const _inorder = function(root) {
      if (!root) return;

      _inorder(root.left);
      root.event.maxEnd = root.maxEnd;
      callback && callback(root.event);
      _inorder(root.right);
    };
    return _inorder(this.root);
  }
}

export default IntervalTree;
