const yargs = require('yargs')
var bars = require('bars');
const argv = yargs.argv
const maxNumber:number=argv.maxnumber;
const sampleCount:number=argv.samplecount;
const digitCount:number=argv.digitcount;
const minNumber:number=argv.minnumber;
const debug:boolean=(argv.debug === "yes") ? true: false;

const generateBenfordCompliantSample = function(maxNumber:number, sampleCount:number, minNumber:number=1) {
    let sample:Array<number>=[];
    let targetChance:number=1/(maxNumber +1 - minNumber);
    let currentLength:number
    for (let sampleSize:number=1; sampleSize<=sampleCount; sampleSize++) {
        currentLength=sample.length;
        while (sample.length === currentLength) {
            for (let currentValue:number=minNumber, maximumValue:number=maxNumber; currentValue <= maximumValue; currentValue++) {
                // Push number with targetChance probability
                if (Math.random() < targetChance) { sample.push(currentValue); break; }
            }
        }
    }
    return sample
}
const firstNDigits = function(value:number, digitCount:number=1){
    return parseInt(value.toString().substring(0,digitCount));
}

const getFirstNDigitsFromSample = function(sample:Array<number>, digitCount:number=1) {
    let arrayOfFirstNDigits:Array<number>=[];
    for (let value of sample) {
        arrayOfFirstNDigits.push(firstNDigits(value, digitCount=digitCount))
    }
    return arrayOfFirstNDigits
}

const benfordLaw = function(maxNumber:number, sampleCount:number, digitCount:number=1, minNumber:number=0) {
    // console.log(`debug=${debug}, maxNumber=${maxNumber}, sampleCount=${sampleCount}, digitCount=${digitCount}, minNumber=${minNumber}`)
    let sample = generateBenfordCompliantSample(maxNumber=maxNumber, sampleCount=sampleCount, minNumber=minNumber);
    if (debug) { process.stdout.write("Simulated sample data:" + '\n' + String(sample) + '\n\n'); }
    let arrayOfFirstNDigits=getFirstNDigitsFromSample(sample=sample, digitCount=digitCount);
    return arrayOfFirstNDigits
}

let arrayOfFirstNDigits=benfordLaw(maxNumber,sampleCount,digitCount,minNumber);
if (debug) { process.stdout.write("Lead digits:" + '\n' + String(arrayOfFirstNDigits) + '\n\n'); }

let repeatedCountsObject:any={}

for ( let value of arrayOfFirstNDigits ) {
    if (value in repeatedCountsObject) {
        repeatedCountsObject[value]+=1
    } else {
        repeatedCountsObject[value]=1
    }
}
console.log(bars(repeatedCountsObject, { bar: '=', width: 20, sort: true }))
export default { benfordLaw }
