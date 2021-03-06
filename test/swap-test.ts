import 'mocha';
import { expect } from 'chai';
import { Permuter, swaps } from '../src'

const swaplist = [
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[1,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[2,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,4],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[1,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[2,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,4],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[1,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[2,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,4],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[1,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[2,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,4],
  [0,1],[0,2],[0,1],[0,2],[0,1],[0,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[1,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],[2,3],
  [0,1],[0,2],[0,1],[0,2],[0,1],
];

describe("Generate swaps", () => {
  for (let n = 1; n < 6; n++) {
    it(`should generate swaps for ${ n } elements`, () => {
      const s = [...swaps(n)];
      expect(s).to.eql(swaplist.slice(0, s.length));
    });
  }

  
  it("should generate swaps for 5 elements with reused memory", () => {
    const p = new Permuter(5);
    const s: number[][] = [];
    for (;;) {
      p.next();
      if (p.done) break;
      s.push([p.j, p.i]);
    }
    expect(s).to.eql(swaplist);
  });
});