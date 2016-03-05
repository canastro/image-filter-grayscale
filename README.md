# image-filter-grayscale

Small library to apply a grayscale transformation to a image.

## Install

```
npm install image-filter-grayscale --save
```

## Usage
At the moment there are three ways of usage:
* from image
* from imageData
* from url

### From image:

JS file:
```js
var imageGrayscale = require('image-filter-grayscale');

imageGrayscale({
    from: '#original',
    to: '#target-1',
    adjustment: 30
});
```

HTML:
```html
<img id="original" src="http://lorempixel.com/400/200" />
<div id="target-1"></div>
```

### From canvas imageData:

```js
var imageGrayscale = require('image-filter-grayscale');

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var img = new Image;
img.onload = function(){
    context.drawImage(img,0,0);

    var imageData = context.getImageData(0, 0, img.width, img.height);

    var result2 = imageGrayscale({
        imageData: imageData,
        to: '#target-2',
        adjustment: 30
    });
};
img.src = "http://lorempixel.com/400/200";
```

### From image url:
```js
var imageGrayscale = require('image-filter-grayscale');

imageGrayscale({
    url: "http://lorempixel.com/400/200",
    to: '#target-3',
    adjustment: 30
});
```
