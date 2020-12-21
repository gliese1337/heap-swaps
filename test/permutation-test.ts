import 'mocha';
import { expect } from 'chai';
import { permute } from '../src'

const perms = [
  [1,2,3,4,5],[2,1,3,4,5],[3,1,2,4,5],[1,3,2,4,5],[2,3,1,4,5],[3,2,1,4,5],
  [4,2,1,3,5],[2,4,1,3,5],[1,4,2,3,5],[4,1,2,3,5],[2,1,4,3,5],[1,2,4,3,5],
  [1,3,4,2,5],[3,1,4,2,5],[4,1,3,2,5],[1,4,3,2,5],[3,4,1,2,5],[4,3,1,2,5],
  [4,3,2,1,5],[3,4,2,1,5],[2,4,3,1,5],[4,2,3,1,5],[3,2,4,1,5],[2,3,4,1,5],
  [5,3,4,1,2],[3,5,4,1,2],[4,5,3,1,2],[5,4,3,1,2],[3,4,5,1,2],[4,3,5,1,2],
  [1,3,5,4,2],[3,1,5,4,2],[5,1,3,4,2],[1,5,3,4,2],[3,5,1,4,2],[5,3,1,4,2],
  [5,4,1,3,2],[4,5,1,3,2],[1,5,4,3,2],[5,1,4,3,2],[4,1,5,3,2],[1,4,5,3,2],
  [1,4,3,5,2],[4,1,3,5,2],[3,1,4,5,2],[1,3,4,5,2],[4,3,1,5,2],[3,4,1,5,2],
  [2,4,1,5,3],[4,2,1,5,3],[1,2,4,5,3],[2,1,4,5,3],[4,1,2,5,3],[1,4,2,5,3],
  [5,4,2,1,3],[4,5,2,1,3],[2,5,4,1,3],[5,2,4,1,3],[4,2,5,1,3],[2,4,5,1,3],
  [2,1,5,4,3],[1,2,5,4,3],[5,2,1,4,3],[2,5,1,4,3],[1,5,2,4,3],[5,1,2,4,3],
  [5,1,4,2,3],[1,5,4,2,3],[4,5,1,2,3],[5,4,1,2,3],[1,4,5,2,3],[4,1,5,2,3],
  [3,1,5,2,4],[1,3,5,2,4],[5,3,1,2,4],[3,5,1,2,4],[1,5,3,2,4],[5,1,3,2,4],
  [2,1,3,5,4],[1,2,3,5,4],[3,2,1,5,4],[2,3,1,5,4],[1,3,2,5,4],[3,1,2,5,4],
  [3,5,2,1,4],[5,3,2,1,4],[2,3,5,1,4],[3,2,5,1,4],[5,2,3,1,4],[2,5,3,1,4],
  [2,5,1,3,4],[5,2,1,3,4],[1,2,5,3,4],[2,1,5,3,4],[5,1,2,3,4],[1,5,2,3,4],
  [4,5,2,3,1],[5,4,2,3,1],[2,4,5,3,1],[4,2,5,3,1],[5,2,4,3,1],[2,5,4,3,1],
  [3,5,4,2,1],[5,3,4,2,1],[4,3,5,2,1],[3,4,5,2,1],[5,4,3,2,1],[4,5,3,2,1],
  [4,2,3,5,1],[2,4,3,5,1],[3,4,2,5,1],[4,3,2,5,1],[2,3,4,5,1],[3,2,4,5,1],
  [3,2,5,4,1],[2,3,5,4,1],[5,3,2,4,1],[3,5,2,4,1],[2,5,3,4,1],[5,2,3,4,1],
];

describe("Generate permutations", () => {
  for (let n = 1; n < 6; n++) {
    it(`should generate permutations for ${ n } elements`, () => {
      const s = [...permute([1,2,3,4,5].slice(0, n), { copy: true })];
      expect(s).to.eql(perms.slice(0, s.length).map(p => p.slice(0, n)));
    });
  }
});