var images = ["b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg", "b8.jpg", "b9.jpg", "b10.jpg", "b1.jpg"];
var imagesTitle = ["Desert Road", "Glowing Trees", "Skyline From Top", "Landscape Valley", "Beach", "Flowers", "Girl On The White", "Mapples", "Forest Road"];
var imageSub = ["For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", "For more beautiful images", ];
var index = 0;

function nextPreview() {
    console.log(index);
    var previewElem = document.getElementById("snowden-preview");
    var nextElem = document.getElementById("snowden-next");
    var previewTitleElem = document.getElementById("snowden-preview-title");
    var nextTitleElem = document.getElementById("snowden-next-title");
    var prevImagePath = "url(" + "'/img/" + images[index] + "'" + ")";
    previewElem.style.background = prevImagePath;
    previewElem.style.backgroundSize = "100% 100%";
    previewTitleElem.innerHTML = imagesTitle[index];
    if (index < images.length - 1) {
        index += 1;
    } else {
        index = 0;
    }
    var nextImagePath = "url(" + "'/img/" + images[index] + "'" + ")";
    nextElem.style.background = nextImagePath;
    nextElem.style.backgroundSize = "100% 100%";
    nextTitleElem.innerHTML = imagesTitle[index];

}