var utils = require('./utils');

/**
 * @name transform
 * @param {object} imageData
 * Iterate over the array applying the grayscale transformation
 */
 function transform(imageData) {
    var data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        data[i] = data[i+1] = data[i+2] = v;
    }

    return imageData;
}

/**
 * @name grayScale
 * @param {object} options
 * @param {string} options.data - data of a image extracted from a canvas
 * @param {bool} options.asDataURL
 */
module.exports = function grayScale(options) {
    var element;
    var data;
    var factor
    var canvas;
    var context;
    var result;

    if (!options.data) {
        throw new Error('image-filter-grayscale:: invalid options provided');
    }

    canvas = utils.getCanvas(options.data.width, options.data.height);
    context = canvas.getContext('2d');

    options.data = utils.getPixels(canvas, context, options.data);

    result = transform(options.data);

    if (options.asDataURL) {
        return utils.convertToDataURL(canvas, context, result);
    }

    return result;
}
