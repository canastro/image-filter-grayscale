/**
 * @name transform
 * @param {object} imageData
 * Iterate over the array applying the grayscale transformation
 */
export function transform(data, length) {
    for (let i = 0; i < length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // CIE luminance for the RGB
        // The human eye is bad at seeing red and blue, so we de-emphasize them.
        const v = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        data[i] = data[i + 1] = data[i + 2] = v;
    }
}
