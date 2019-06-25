const digits = require('./constant');

function getDigit(givenNumber) {
    const numberAsArrayOfChar = Array.from(String(givenNumber));
    const arrayOfDigit = numberAsArrayOfChar.map(elem => {
        return digits[elem];
    });
    return buildEntireDigit(arrayOfDigit);
}

function buildEntireDigit(digitArray) {
    const reducer = (acc, current) => acc + current + ' ';

    const firstLine = digitArray.map(digit => {
        return digit[0];
    }).reduce(reducer, '');
    const secondLine = digitArray.map(digit => {
        return digit[1];
    }).reduce(reducer, '');
    const thirdLine = digitArray.map(digit => {
        return digit[2];
    }).reduce(reducer, '');

    return firstLine +
        '\n' +
        secondLine +
        '\n' +
        thirdLine;
}

module.exports = getDigit;