import { expect } from 'chai';
import { transform } from '../src/grayscale';

describe('grayscale', () => {
    it('should apply transformation', () => {
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

        const expectedData = [
            215.13299999999998,
            215.13299999999998,
            215.13299999999998,
            255,
            193,
            219,
            242,
            255
        ];

        transform(data, 4);
        expect(data).to.deep.equal(expectedData);
    });
});
