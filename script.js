window.onload = choosePic();

var myCats = [
  "imagem/foto1.jpg",
  "imagem/foto2.jpg",
  "imagem/foto3.jpg",
  "imagem/foto4.jpg",
];

function choosePic() {
  var randomNum = Math.floor(Math.random() * myCats.length);
  document.getElementById("myPicture").src = myCats[randomNum];
}
