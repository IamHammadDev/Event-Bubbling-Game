var timer = 30;
var score = 0;
var hitRn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

function bubbleMaker() {
  var cluter = "";
  for (let i = 1; i <= 75; i++) {
    var randomNumber = Math.floor(Math.random() * 10);
    cluter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = cluter;
}

function runTimer() {
  var timerClear = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerClear);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1 class="gameOver">Game Over👾</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitRn) {
    increaseScore();
    bubbleMaker();
    getNewHit();
  }
});

runTimer();
getNewHit();
bubbleMaker();
