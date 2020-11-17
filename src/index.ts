const argv = require('yargs').argv
const maxNumber:number=argv.maxnumber;
const sampleCount:number=argv.samplecount;
const digitCount:number=argv.digitcount;
const minNumber:number=argv.minnumber;

const generateBenfordCompliantSample = function(maxNumber:number, sampleCount:number, minNumber:number=1) {
    let sample:Array<number>=[];
    let targetChance:number=1/(maxNumber - minNumber);
    for (let sampleSize:number=minNumber; sampleSize<=sampleCount; sampleSize++) {
        for (let currentValue:number=1, maximumValue:number=maxNumber; currentValue <= maximumValue; currentValue++) {
            // At the end of range, automatically push maximum number
            if (currentValue === maximumValue) { sample.push(maximumValue); break; }
            // Push number with targetChance probability
            if (Math.random() < targetChance) { sample.push(currentValue); break; }
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
    // console.log(`maxNumber=${maxNumber}, sampleCount=${sampleCount}, digitCount=${digitCount}, minNumber=${minNumber}`)
    let sample = generateBenfordCompliantSample(maxNumber=maxNumber, sampleCount=sampleCount, minNumber=minNumber);
    let arrayOfFirstNDigits=getFirstNDigitsFromSample(sample=sample, digitCount=digitCount);
    return arrayOfFirstNDigits
}

process.stdout.write(String(benfordLaw(maxNumber,sampleCount,digitCount,minNumber)) + '\n');

export default { benfordLaw }
