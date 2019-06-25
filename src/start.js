const getDigit = require('./service');
const { NoParameterError, NotAnIntegerParameterError, NegativeParameterError } = require('./errors');

try {
    const givenNumber = getParam(process.argv);
    console.log(getDigit(givenNumber));
} catch (e) {
    console.log(e.message);
}

function getParam(argv) {
    if (argv.length === 2) {
        throw new NoParameterError();
    }
    let param = argv[2];
    if (isNaN(param)) {
        throw new NotAnIntegerParameterError();
    }
    param = Number(param);
    if (!Number.isInteger(param)) {
        throw new NotAnIntegerParameterError();
    }
    if (param < 0) {
        throw new NegativeParameterError();
    }
    return param;
}

module.exports = getParam;