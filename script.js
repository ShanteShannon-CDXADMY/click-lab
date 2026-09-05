let correctSound = document.getElementById("correctSound");
let wrongSound = document.getElementById("wrongSound");

// ======================================================
// SCORE
// ======================================================
let score = 0;
let scoreboard = document.getElementById("scoreboard");

function updateScoreboard() {
  scoreboard.textContent = "Score: " + score;
}

// ======================================================
//  QUESTION 1
// ======================================================
let defaultImage1 = document.getElementById("defaultImage1");
let q1wrongText = document.getElementById("q1wrongText");
let q1correctText = document.getElementById("q1correctText");
let wrongImage = document.getElementById("wrongImage1");
let q1wrong1 = document.getElementById("q1wrong1");
let q1correct = document.getElementById("q1correct");
let q1wrong2 = document.getElementById("q1wrong2");

q1wrongText.style.display = "none";
q1correctText.style.display = "none";

q1correct.addEventListener("click", () =>{
  defaultImage1.src="peru.jpg";
  defaultImage1.alt = "correct image";
  q1correctText.style.display = "block";
  q1wrongText.style.display = "none";
  q1correctText.style.color="green";
  correctSound.pause();
  correctSound.currentTime = 0;
  correctSound.play();
  score++;
  updateScoreboard();
});

q1wrong1.addEventListener("click", () => {
  defaultImage1.src ="wrong.png";
  defaultImage1.alt = "wrong image";
  q1wrongText.style.display = "block";
  q1correctText.style.display = "none";
  q1wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score0
  updateScoreboard();
});

q1wrong2.addEventListener("click", () => {
  defaultImage1.src ="wrong.png";
  defaultImage1.alt = "wrong image";
  q1wrongText.style.display = "block";
  q1correctText.style.display = "none";
  q1wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score--;
  updateScoreboard();
});

// ======================================================
// ⭐ QUESTION 2 (same format as Q1)
// ======================================================
let defaultImage2 = document.getElementById("defaultImage2");
let q2wrongText = document.getElementById("q2wrongText");
let q2correctText = document.getElementById("q2correctText");
let wrongImage2 = document.getElementById("wrongImage2");
let q2wrong1 = document.getElementById("q2wrong1");
let q2wrong2 = document.getElementById("q2wrong2");
let q2correct = document.getElementById("q2correct");

q2wrongText.style.display = "none";
q2correctText.style.display = "none";

q2correct.addEventListener("click", () =>{
  defaultImage2.src="alaska.png";
  defaultImage2.alt = "correct image";
  q2correctText.style.display = "block";
  q2wrongText.style.display = "none";
  q2correctText.style.color="green";
  correctSound.pause();
  correctSound.currentTime = 0;
  correctSound.play();
  score++;
  updateScoreboard();
});

q2wrong1.addEventListener("click", () => {
  defaultImage2.src ="wrong.png";
  defaultImage2.alt = "wrong image";
  q2wrongText.style.display = "block";
  q2correctText.style.display = "none";
  q2wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score--;
  updateScoreboard();
});

q2wrong2.addEventListener("click", () => {
  defaultImage2.src ="wrong.png";
  defaultImage2.alt = "wrong image";
  q2wrongText.style.display = "block";
  q2correctText.style.display = "none";
  q2wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score--;
  updateScoreboard();
});

// ======================================================
// ⭐ QUESTION 3
// ======================================================
let defaultImage3 = document.getElementById("defaultImage3");
let q3wrongText = document.getElementById("q3wrongText");
let q3correctText = document.getElementById("q3correctText");
let wrongImage3 = document.getElementById("wrongImage3");
let q3wrong1 = document.getElementById("q3wrong1");
let q3wrong2 = document.getElementById("q3wrong2");
let q3correct = document.getElementById("q3correct");

q3wrongText.style.display = "none";
q3correctText.style.display = "none";

q3correct.addEventListener("click", () =>{
  defaultImage3.src="saturn.jpg";
  defaultImage3.alt = "correct image";
  q3correctText.style.display = "block";
  q3wrongText.style.display = "none";
  q3correctText.style.color="green";
  correctSound.pause();
  correctSound.currentTime = 0;
  correctSound.play();
  score++;
  updateScoreboard();
});

q3wrong1.addEventListener("click", () => {
  defaultImage3.src ="wrong.png";
  defaultImage3.alt = "wrong image";
  q3wrongText.style.display = "block";
  q3correctText.style.display = "none";
  q3wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score--;
  updateScoreboard();
});

q3wrong2.addEventListener("click", () => {
  defaultImage3.src ="wrong.png";
  defaultImage3.alt = "wrong image";
  q3wrongText.style.display = "block";
  q3correctText.style.display = "none";
  q3wrongText.style.color="red";
  wrongSound.pause();
  wrongSound.currentTime = 0;
  wrongSound.play();
  score--;
  updateScoreboard();
});
