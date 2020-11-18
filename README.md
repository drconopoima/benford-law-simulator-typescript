# Benford law simulator typescript
A simulator for distributions following Benford's Law in Typescript

## Installation

```sh
    cd benford-law-simulator-typescript
    npm i
    npm i -g ts-node
```

## Run

You can generate a random number in a range with shuf, from coreutils library

```sh
    ts-node src/index.ts --maxnumber $(shuf -i 10-100000 -n 1 | tee >(xargs echo "maxnumber=" 1>&2)) --digitcount 1 --samplecount 5000 --minnumber 1
```

The expected output would be like the following:

```
maxnumber= 10782
1 | ==================== | 907
2 | ===============      | 682
3 | ==============       | 617
4 | ============         | 558
5 | ===========          | 512
6 | ===========          | 478
7 | ==========           | 453
8 | =========            | 418
9 | ========             | 375
```
