var imageGrayscale = require('../index');

window.onload = function () {

    //Usage 1:
    imageGrayscale({
        from: '#original',
        to: '#target-1'
    });
    //Usage 2:
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image;
    img.onload = function(){
        context.drawImage(img,0,0);

        var imageData = context.getImageData(0, 0, img.width, img.height);

        var result2 = imageGrayscale({
            imageData: imageData,
            to: '#target-2'
        });
    };
    img.src = "http://lorempixel.com/400/200";

    //Usage 3:
    imageGrayscale({
        url: "http://lorempixel.com/400/200",
        to: '#target-3'
    });
}
