const getParam = require('./start');
const { NoParameterError, NotAnIntegerParameterError, NegativeParameterError } = require('./errors');

describe('getParam', () => {
    it('should throw exception if there is parameter', () => {
        const argv = ['param0', 'param1'];
        expect(() => {
            getParam(argv);
        }).toThrow(NoParameterError);
    });

    it('should throw exception if parameter is a string', () => {
        const argv = ['param0', 'param1', 'toto'];
        expect(() => {
            getParam(argv);
        }).toThrow(NotAnIntegerParameterError);
    });

    it('should throw exception if parameter is a float', () => {
        const argv = ['param0', 'param1', '56.9'];
        expect(() => {
            getParam(argv);
        }).toThrow(NotAnIntegerParameterError);
    });

    it('should throw exception if parameter is a negative number', () => {
        const argv = ['param0', 'param1', '-788'];
        expect(() => {
            getParam(argv);
        }).toThrow(NegativeParameterError);
    });
});