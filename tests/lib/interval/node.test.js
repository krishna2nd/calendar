import IntervalNode from "../../../src/lib/interval/node";
import assert from "assert";

describe("Interval Node", () => {
  it("Create Node", () => {
    const event = { id: "id", start: 0, end: 1 };
    const node = new IntervalNode(event);
    assert.equal(node.left, undefined);
    assert.equal(node.right, undefined);
    assert.equal(node.maxEnd, 1);
    assert.equal(node.event.id, event.id);
    assert.equal(node.event.start, event.start);
    assert.equal(node.event.end, event.end);
  });
});
