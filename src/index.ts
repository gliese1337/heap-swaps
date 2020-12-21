export class Permuter {
  public done = false;
  private c = [0];
  public i = 0;
  public j = 1;
  
  constructor(private n = Infinity) {}
  
  next() {
    const { c } = this;
    let i = 0;
    this.done = false;
    while (c[i] >= i) {
      c[i++] = 0;
      if (i === c.length) c[i] = 0;
    }
    if (i === this.n) {
      this.done = true;
      this.i = 0;
      this.j = 1;
      c.fill(0);
    } else {
      // c[i] < i
      this.i = i;
      this.j = i&1 ? c[i] : 0;
      c[i]++;
    }
  }
}

export function * swaps(n = Infinity, cycle = false): Generator<[number, number]> {
  if (n < 2) return;
  const c = [0];
  for (;;) {
    let i = 0;
    do if (c[i] < i) {
      yield (i&1) ? [c[i], i] : [0, i];
      c[i]++;
      i = 0;
    } else {
      c[i++] = 0;
      if (i === c.length) c[i] = 0;
    } while (i < n);

    if (cycle) c.fill(0);
    else return;
  }
}

export function * permute<T>(
  s: Iterable<T>,
  { copy = false, cycle = false }: { copy?: boolean; cycle?: boolean; } = {}) {
  const l = [...s];
  const n = l.length;
  if (n < 2) {
    yield l;
    return;
  }

  yield copy ? [...l] : l;
  const c = l.map(() => 0);
  for (;;) {
    let i = 0;
    do if (c[i] < i) {
      const j = (i&1) ? c[i] : 0;
      const t = l[j];
      l[j] = l[i];
      l[i] = t;
      yield copy ? [...l] : l;
      c[i]++;
      i = 0;
    } else {
      c[i++] = 0;
    } while (i < n);

    if (cycle) c.fill(0);
    else return;
  }
}