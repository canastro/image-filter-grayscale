import worker from './worker';
import { apply, getCanvas } from 'image-filter-core';

/**
 * @name contrastImage
 * @param {object} options
 * @param {string} options.data - data of a image extracted from a canvas
 * @param {string} options.nWorkers - number of workers
 * @param {bool} options.asDataURL
 * @returns {promise}
 */
export default function (options) {
    if (!options.data) {
        throw new Error('image-filter-grayscale:: invalid options provided');
    }

    const nWorkers = options.nWorkers || 4;
    const canvas = getCanvas(options.data.width, options.data.height);
    const context = canvas.getContext('2d');

    // Drawing the source image into the target canvas
    context.putImageData(options.data, 0, 0);

    const len = canvas.width * canvas.height * 4;
    const segmentLength = len / nWorkers; // This is the length of array sent to the worker
    const blockSize = canvas.height / nWorkers; // Height of the picture chunck for every worker

    return apply(
        worker,
        nWorkers,
        canvas,
        context,
        null,
        blockSize,
        segmentLength
    );
}
