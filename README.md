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

# Frequent questions:
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
var result = imageGrayscale({
    data: IMAGE_DATA
});

var image = document.createElement('img');
image.setAttribute('src', result);

var target = document.getElementById('#dummy-target');
target.appendChild(image);
```
