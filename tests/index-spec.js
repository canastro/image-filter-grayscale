var sinon = require('sinon');
var expect = require('chai').expect;
var utils = require('../src/utils');
var imageFilterGrayscale = require('../src/index');

describe('index', function () {
    var sandbox;
    var canvas;
    var context;

    beforeEach(function () {
       // Create a sandbox for the test
       sandbox = sinon.sandbox.create();
   });

   afterEach(function () {
       // Restore all the things made through the sandbox
       sandbox.restore();
   });

    beforeEach(function () {

        context = 'context';

        canvas = {
            width: 100,
            height: 150,
            getContext: sandbox.stub().returns(context)
        };

        sandbox.stub(utils, 'getCanvas').returns(canvas);
    });

    it('should throw error by missing parameters', function () {

        var fn = function () {
            imageFilterGrayscale({});
        };

        expect(fn).to.throw(/image-filter-grayscale:: invalid options provided/);
    });

    it('should apply grayscale transformation and return as imageData', function () {
        var imageData = {
            data: [193, 219, 242, 255]
        };

        const expectedData = {
            data: [215.13299999999998, 215.13299999999998, 215.13299999999998, 255]
        };

        sandbox.stub(utils, 'getPixels').returns(imageData);

        var result = imageFilterGrayscale({
            data: imageData,
            adjustment: 5
        });

        console.log(result);

        expect(result).to.deep.equal(expectedData);
    });

    it('should apply grayscale transformation and return as dataURL', function() {
        var imageData = {
            data: [193, 219, 242, 255]
        };

        const expectedData = {
            data: [215.13299999999998, 215.13299999999998, 215.13299999999998, 255]
        };

        const expectedURL = 'imageDataURL';

        sandbox.stub(utils, 'getPixels').returns(imageData);
        sandbox.stub(utils, 'convertToDataURL').returns('imageDataURL');

        var result = imageFilterGrayscale({
            data: imageData,
            adjustment: 5,
            asDataURL: true
        });

        expect(utils.convertToDataURL.calledWith(canvas, context, expectedData)).to.equal(true);
        expect(result).to.deep.equal(expectedURL);
    });
});
