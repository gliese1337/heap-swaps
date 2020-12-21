# heap-swaps
 Generates swap indices for producing all permutations of a sequence, or generate the permutations themselves.

# API

This module exports the following class:

```ts
class Permuter {
  done: boolean;
  i: number;
  j: number;

  constructor(n?: number);

  next(): void;
}
```

The constructor argument `n` indicates the number of elements to be permuted. If it is omitted, permutations will be generated indefinitely for an infinite set.

The `i` and `j` fields hold the indices of elements to be swapped to generate the next permutation. Calling `next()` will update those fields, as well as the `done` field. If `n` is provided, the `done` field will be set to true after `n! - 1` swaps have been produced.

The module also exports the following convenience functions:

```ts
function swaps(n?: number, cycle?: boolean): Generator<[number, number]>;
```

The `swaps` function will return a generator for pairs of indices. By default, `cycle` is set to false, in which case the generator will terminate after `n! - 1` pairs are produced. If `cycle` is set to true, the generator will continue to produce index pairs indefinitely, repeating previous permutations. If `n` is omitted, the generator will indefinitely produce a sequence of swaps for an infinite set.

```ts
function permute<T>(s: Iterable<T>, { copy, cycle }?: {
    copy?: boolean;
    cycle?: boolean;
}): Generator<T[]>;
```

Given a finite iterable of arbitrary elements, `permute` will generate the actual permutations. The `cycle` argument works just as it does for `swaps`. By default, the generator returned by `permute` will yield the same array over and over, with the elements swapped in place; setting the `copy` argument to true will cause the generator to create unique arrays for every permutation.