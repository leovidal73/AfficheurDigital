const getDigit = require('./service');

describe('getDigit', () => {
    it('should return the digit for given number', () => {
        const expectedRes = ' _   _       _   _  \n' +
            '|_  |_  |_| |_|   | \n' +
            '|_|  _|   | |_|   | ';
        expect(getDigit(65487)).toBe(expectedRes);
    });
});
