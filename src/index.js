var imageFilterCore = require('image-filter-core');
var transform = require('./transform');

/**
 * @name grayscale
 * @param {ImageData} data - data of a image extracted from a canvas
 * @param {Number} nWorkers - number of workers
 * @returns {Promise}
 */
module.exports =  function grayscale(data, nWorkers) {
    if (!data) {
        throw new Error('image-filter-grayscale:: invalid options provided');
    }

    return imageFilterCore.apply(data, transform, null, nWorkers);
};
