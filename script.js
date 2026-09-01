let score = 0;
let scoreboard = document.getElementById("scoreboard");

// Shared sounds
let correctSound = document.getElementById("correctSound");
let wrongSound = document.getElementById("wrongSound");

// Image groups
let defaultImages = document.getElementsByClassName("defaultImage");
let correctImages = document.getElementsByClassName("correctImage");
let wrongImages = document.getElementsByClassName("wrongImage");

// Hide all default images
function hideDefaultImages() {
  for (let img of defaultImages) {
    img.style.display = "none";
  }
}

// Hide all correct images
function hideCorrectImages() {
  for (let img of correctImages) {
    img.style.display = "none";
  }
}

// Hide all wrong images
function hideWrongImages() {
  for (let img of wrongImages) {
    img.style.display = "none";
  }
}

// Stop sounds
function stopAudio() {
  correctSound.pause();
  correctSound.currentTime = 0;
  wrongSound.pause();
  wrongSound.currentTime = 0;
}

// Wrong answer
function wrongAnswer(taglineElement, wrongImageId) {
  hideDefaultImages();
  hideCorrectImages();
  hideWrongImages();

  document.getElementById(wrongImageId).style.display = "block";

  taglineElement.textContent = "Incorrect!";
  taglineElement.style.color = "red";

  stopAudio();
  wrongSound.play();

  score--;
  scoreboard.textContent = "Score: " + score;
}

// Correct answer
function correctAnswer(taglineElement, correctImageId) {
  hideDefaultImages();
  hideCorrectImages();
  hideWrongImages();

  document.getElementById(correctImageId).style.display = "block";

  taglineElement.textContent = "Correct!";
  taglineElement.style.color = "green";

  stopAudio();
  correctSound.play();

  score++;
  scoreboard.textContent = "Score: " + score;
}

/* ---------------- QUESTION 1 ---------------- */
let tagline1 = document.getElementById("tagline1");

q1wrong1.addEventListener("click", () => wrongAnswer(tagline1, "wrongImage1"));
q1wrong2.addEventListener("click", () => wrongAnswer(tagline1, "wrongImage1"));
q1correct.addEventListener("click", () => correctAnswer(tagline1, "correctImage1"));

/* ---------------- QUESTION 2 ---------------- */
let tagline2 = document.getElementById("tagline2");

q2wrong1.addEventListener("click", () => wrongAnswer(tagline2, "wrongImage2"));
q2wrong2.addEventListener("click", () => wrongAnswer(tagline2, "wrongImage2"));
q2correct.addEventListener("click", () => correctAnswer(tagline2, "correctImage2"));

/* ---------------- QUESTION 3 ---------------- */
let tagline3 = document.getElementById("tagline3");

q3wrong1.addEventListener("click", () => wrongAnswer(tagline3, "wrongImage3"));
q3wrong2.addEventListener("click", () => wrongAnswer(tagline3, "wrongImage3"));
q3correct.addEventListener("click", () => correctAnswer(tagline3, "correctImage3"));
