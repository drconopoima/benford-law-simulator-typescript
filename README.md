# Benford's law simulator in typescript

A simulator for distributions following Benford's Law in Typescript

## Installation

```sh
    git clone https://github.com/drconopoima/benford-law-simulator-typescript.git
    cd benford-law-simulator-typescript
    npm install
    npm i -g ts-node
```

## Run

You can generate a random number in a range with shuf, from coreutils library

```sh
ts-node src/index.ts --maxnumber \
  $(shuf -i 10-100000 -n 1 | tee >(xargs echo "maxnumber=" 1>&2)) \
  --digitcount 1 --samplecount 5000 --minnumber 1
```

The expected output would be like the following:

```txt
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

If you want to get the generated sample, you may set optional `--debug` parameter to yes:

```sh
ts-node src/index.ts --debug yes --maxnumber \
  $(shuf -i 10-100000 -n 1 | tee >(xargs echo "maxnumber=" 1>&2)) \
  --digitcount 1 --samplecount 30 --minnumber 1
```

Expected output:

```txt
maxnumber= 53944
Simulated sample data:
34387,19018,12742,51591,48115,262,22791,12508,45494,28791,7695,24438,\
31766,13142,53118,38539,37112,34692,30430,11189,27668,31257,28513,\
23494,2704,3772,42137,10210,25884,22428

Lead digits:
3,1,1,5,4,2,2,1,4,2,7,2,3,1,5,3,3,3,3,1,2,3,2,2,2,3,4,1,2,2

  2 | ==================== | 10
  3 | ================     | 8
  1 | ============         | 6
  4 | ======               | 3
  5 | ====                 | 2
  7 | ==                   | 1
```

You may generate output for the lead pair of digits as well, or any lead digit count with the option `--digitcount`

```sh
ts-node src/index.ts --digitcount 2 --samplecount 10000 \
  --minnumber 1 --maxnumber \
  $(shuf -i 100-100000 -n 1 | tee >(xargs echo "maxnumber=" 1>&2))
```

Expected output:

```txt
maxnumber= 18616
  10 | ==================== | 566
  11 | ==================== | 562
  12 | ==================== | 556
  13 | ===================  | 525
  14 | ================     | 460
  15 | ===============      | 430
  16 | ===============      | 416
  17 | ==============       | 396
  18 | ==========           | 276
  19 | ====                 | 100
  ...
```
