class NoParameterError extends Error {
    constructor(...params) {
        super(...params);
        this.message = 'No given parameter, a parameter is required !';
    }
}

class NotAnIntegerParameterError extends Error {
    constructor(...params) {
        super(...params);
        this.message = 'The parameter must be a integer !';
    }
}

class NegativeParameterError extends Error {
    constructor(...params) {
        super(...params);
        this.message = 'The parameter must be a positive number !';
    }
}

module.exports = { NoParameterError, NotAnIntegerParameterError, NegativeParameterError };