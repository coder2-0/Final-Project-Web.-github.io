var Index = 1;
var totalImages = 3; 

function getNext() {
  Index = (Index % totalImages) + 1;
  updateImage();
}

function getPrevious() {
  Index = (Index === 1) ? totalImages : Index - 1;
  updateImage();
}

function updateImage() {
  var imageElement = document.getElementById('im');
  imageElement.src = "Schools/1 (" + Index + ").png";
}
