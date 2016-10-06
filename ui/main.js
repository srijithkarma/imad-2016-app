console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = "Content Ch due to execution of main.js";

//Now lets move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.margingLeft = '500px';
    //This line changes the css from javascipt.
};