        let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let plur = document.getElementById("plur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

window.onload = function(){
 download.style.display = 'none';   
 reset.style.display = 'none';   
 imgBox.style.display = 'none';   
}