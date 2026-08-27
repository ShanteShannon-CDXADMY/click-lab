let headline = document.getElementById("headline-1");
console.log(headline);
let tagline= document.getElementById("tagline-1");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let score = 0;
let scoreboard = document.getElementById("scoreboard");
let correctSound = new Audio("correct.mp3");
let wrongSound = new Audio("wrong.mp3");


function updateScoreboard() {
  scoreboard.textContent = "Score: " + score;
}

function stopAllAudio() {
  correctSound.pause();
  correctSound.currentTime = 0;

  wrongSound.pause();
  wrongSound.currentTime = 0;
}

button1.addEventListener("click", function(){
  stopAllAudio(); 
  tagline.textContent = "Incorrect!";
  tagline.style.color = "red";
  wrongSound.play(); 
 score--;  
});

button2.addEventListener("click", function(){
  stopAllAudio();
  tagline.textContent = "Correct!";
  tagline.style.color = "green";
  correctSound.play(); 
	score++;            
  updateScoreboard(); 
});

button3.addEventListener("click", function(){
  stopAllAudio();                
  tagline.textContent = "Incorrect!";
  tagline.style.color = "red";
  wrongSound.play();    
score--;  
});
