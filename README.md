# image-filter-grayscale

Small library to apply a grayscale transformation to a image.

## Install

```
npm install image-filter-grayscale --save
```

## Usage
It applies a grayscale transformation to a base64 image. If you want a more complete library, please check image-filters that wraps this and other libraries to provide a more complete suite of image filters.

```js
var imageGrayscale = require('image-filter-grayscale');

var result = imageGrayscale({
    data: IMAGE_DATA
});
```
