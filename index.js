function getImageElement(selector) {
    var element = document.querySelectorAll(selector)[0];

    if (!element) {
        throw new Error('image-filter-grayscale:: no "from" element found');
    }

    return element;
}

function getImageData(context, element) {

    if (element.tagName !== 'IMG') {
        throw new Error('image-filter-grayscale:: invalid origin');
    }

    context.drawImage(element, 0, 0 );
    return context.getImageData(0, 0, element.width, element.height);
}

function transform(canvas, context, imageData) {
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

    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}

function appendResult(selector, src) {

    var target;
    var image;

    if (!selector) {
        return;
    }

    target = document.querySelectorAll(selector)[0];

    if (!target) {
        throw new Error('image-filter-grayscale:: no "to" element found');
    }

    image = document.createElement('img');
    image.setAttribute('src', src);
    target.appendChild(image);
}

/**
 * @name contrastImage
 * @param {object} options
 * @param {string} options.url - image url
 * @param {string} options.imageData - data of a image extracted from a canvas
 * @param {string} options.from - dom selector of the original image
 * @param {string} options.to - dom selector of the target result
 */
module.exports = function grayScale(options) {
    var element;
    var data;
    var factor
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (!options || (!options.url && !options.imageData && !options.from)) {
        throw new Error('image-filter-grayscale:: invalid options object');
    }

    if (options.url) {
        element = document.createElement('img');
        element.setAttribute('src', options.url);
        data = getImageData(context, element);
    } else if (options.imageData) {
        data = options.imageData;
    } else if (options.from) {
        element = getImageElement(options.from);
        data = getImageData(context, element);
    }

    if (!data) {
        throw new Error('image-filter-grayscale:: no data found');
    }

    result = transform(canvas, context, data);

    appendResult(options.to, result);

    return result;
}
