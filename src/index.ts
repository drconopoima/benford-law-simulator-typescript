const argv = require('yargs').argv
const maxNumber:number=argv.max_number;
const sampleCount:number=argv.sample_count;
const digitCount:number=argv.digit_count;
const minNumber:number=argv.min_number;

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
    let arrayOfFirstNDigits = new Array(sample.length)
    for (let value of sample) {
        arrayOfFirstNDigits.push(firstNDigits(value, digitCount=digitCount))
    }
    return arrayOfFirstNDigits
}

const benfordLaw = function(maxNumber:number, sampleCount:number, digitCount:number=1, minNumber:number=0) {
    let sample = generateBenfordCompliantSample(maxNumber=maxNumber, sampleCount=sampleCount);
    let arrayOfFirstNDigits=getFirstNDigitsFromSample(sample=sample, digitCount=digitCount);
    console.log(arrayOfFirstNDigits);
}

process.stdout.write(String(benfordLaw(maxNumber,sampleCount)) + '\n');

export default { benfordLaw }
