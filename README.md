![build status](https://travis-ci.org/canastro/image-filter-grayscale.svg?branch=master)
[![npm version](https://badge.fury.io/js/image-filter-grayscale.svg)](https://badge.fury.io/js/image-filter-grayscale)
[![codecov](https://codecov.io/gh/canastro/image-filter-grayscale/branch/master/graph/badge.svg)](https://codecov.io/gh/canastro/image-filter-grayscale)

# image-filter-grayscale

Small library to apply a grayscale transformation to a image relying on `image-filter-core` handle the transformation and distribute work with webworkers.

Other related modules:
* [image-filter-core](https://www.npmjs.com/package/image-filter-core)
* [image-filter-contrast](https://www.npmjs.com/package/image-filter-contrast)
* [image-filter-grayscale](https://www.npmjs.com/package/image-filter-grayscale)
* [image-filter-threshold](https://www.npmjs.com/package/image-filter-threshold)
* [image-filter-sepia](https://www.npmjs.com/package/image-filter-sepia)
* [image-filter-invert](https://www.npmjs.com/package/image-filter-invert)
* [image-filter-gamma](https://www.npmjs.com/package/image-filter-gamma)
* [image-filter-colorize](https://www.npmjs.com/package/image-filter-colorize)
* [image-filters](https://www.npmjs.com/package/image-filters)

## Install

```
npm install image-filter-grayscale --save
```

## Usage
It applies a grayscale transformation to a base64 image. If you want a more complete library, please check image-filters that wraps this and other libraries to provide a more complete suite of image filters.

This library consumes ImageData and outputs ImageData in a Promise. You can use `image-filter-core` to convert from ImageData to dataURL.

JS file:
```js
var imageGrayscale = require('image-grayscale');
var nWorkers = 4;

imageGrayscale(IMAGE_DATA, 4);
```

## Frequent questions:
### How can I get image data from a image tag?

```js
var element = document.getElementById('#dummy-image');
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.drawImage(element, 0, 0 );
var imageData = context.getImageData(0, 0, element.width, element.height);
```

### How can I get image data from url?

```js
var element = document.createElement('img');
element.setAttribute('src', options.url);
//...repeat process from the previous answer
```

### How can I use the output of this?

```js
var imageFilterCore = require('image-filter-core');
var nWorkers = 4;

imageGrayscale(IMAGE_DATA, nWorkers)
    .then(function (result) {
        // result === ImageData object
        var image = document.createElement('img');
        image.setAttribute('src', imageFilterCore.convertImageDataToCanvasURL(imageData));
        target.appendChild(image);
    });
```
