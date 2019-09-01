class IntervalNode {
  constructor(_event) {
    this.left = undefined;
    this.right = undefined;
    this.maxEnd = _event.end;
    this.event = _event;
  }
}

export default IntervalNode;
