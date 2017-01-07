const expect = require('chai').expect;
const transform = require('../src/transform');

describe('transform', function () {
    it('should apply transformation and return as imageData', function () {
        const data = [
            193,
            219,
            242,
            255,
            193,
            219,
            242,
            255
        ];

        const expectedData = [215.13299999999998, 215.13299999999998, 215.13299999999998, 255, 193, 219, 242, 255];

        transform(data, 4);
        expect(data).to.deep.equal(expectedData);
    });
});
