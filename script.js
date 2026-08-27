let headline = document.getElementById("headline-1");
console.log(headline);
let tagline= document.getElementById("tagline-1");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let correctSound = new Audio("correct.mp3");
let wrongSound = new Audio ("wrong.mp3");

button1.addEventListener("click", function(){
	tagline.textContent = "Incorrect!";
	wrongSound.play();
});
button2.addEventListener("click", function(){
	tagline.textContent = "Correct!";
	correctSound.play();
});
button3.addEventListener("click", function(){
	tagline.textContent = "Incorrect!";
	wrongSound.play();
});