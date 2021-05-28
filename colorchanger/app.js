// array colors
const colors = ["red", "blue", "green", "#000000", "purple", "rgba(0.5,230,1)"];

const btn = document.querySelector('button');
let body = document.getElementsByTagName('body');
let colorName = document.querySelector('.colorName');

// display random number on event click
btn.addEventListener("click", function(){
    let randomColor = getRandomNumber();
    document.body.style.backgroundColor = colors[randomColor];
    colorName.textContent = colors[randomColor];
});
// get random number for string of arrays
function getRandomNumber(){
     return Math.floor(Math.random() * colors.length);
}
