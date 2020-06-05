

const images = [
    "https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photoszzz/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

function loadImage(src) {

    // Return new promise
    return new Promise(function(resolve, reject) {
        // do async
        const image = new Image();
        image.src = src;
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function(e) {
            reject(e);
        };
    });
}

let width = 1;

function increaseBar(increment) {
    const elem = document.getElementById("myBar");

    width += increment;
    if (width <=100) {
        elem.style.width = width + "%";
    }

}

function main() {

    let total = images.length;
    let increment = 1/total * 100 ;
    images.forEach(image => {
        let promise = loadImage(image);
        promise.then(function(result) {
            console.log("images loaded");
            document.body.appendChild(result);
            increaseBar(increment);
        }, function(err) {
            console.log(err);
        })
    })
}

main();
