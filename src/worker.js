import { transform } from './grayscale';

module.exports = function (self) {
    self.addEventListener('message', (e) => {
        const canvasData = e.data.data;
        const binaryData = canvasData.data;

        const length = e.data.length;
        const index = e.data.index;

        transform(binaryData, length);

        self.postMessage({
            result: canvasData,
            index
        });

        self.close();
    });
};
