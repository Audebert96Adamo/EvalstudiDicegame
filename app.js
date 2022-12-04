let scores = [0, 0, 0];
let roundScore = 0;
let isPlaying = true;
let currentTurn = 1;

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const restart = document.querySelector(".new-game");

function nextPlayer() {
  currentTurn === 1 ? (currentTurn = 2) : (currentTurn = 1);
  roundScore = 0;

  document.querySelector(".player1").classList.toggle("active");
  document.querySelector(".player2").classList.toggle("active");
  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";
}

roll.addEventListener("click", () => {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  let diceValue = document.querySelector(".dice-pos");
  if (isPlaying) {
    diceValue.src = "./img/dice-" + rollValue + ".png";
    if (rollValue !== 1) {
      roundScore += rollValue;
      let currentScoreValue = document.querySelector(
        "#current-score-" + currentTurn
      );
      // console.log(currentScoreValue);
      currentScoreValue.textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

hold.addEventListener("click", () => {
  if (isPlaying) {
    scores[currentTurn] += roundScore;
    // console.log(scores);
    let scoreValue = document.querySelector("#score-" + currentTurn);
    scoreValue.textContent = scores[currentTurn];
    if (scores[currentTurn] >= 100) {
      let winningPlayer = document.querySelector("#name-" + currentTurn);
      let addWinninngClass = document.querySelector(".player" + currentTurn);

      winningPlayer.textContent = "Gagné !";
      addWinninngClass.classList.add("winner");
      isPlaying = false;
    } else {
      nextPlayer();
    }
  }
});

restart.addEventListener("click", () => {
  isPlaying = true;
  scores = [0, 0, 0];
  currentTurn = 1;
  roundScore = 0;

  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-2").textContent = "0";
  document.getElementById("current-score-1").textContent = "0";
  document.getElementById("current-score-2").textContent = "0";
  document.getElementById("name-1").textContent = "Player 1";
  document.getElementById("name-2").textContent = "Player 2";
  document.querySelector(".player1").classList.remove("winner");
  document.querySelector(".player2").classList.remove("winner");
  document.querySelector(".player2").classList.remove("active");
  document.querySelector(".player1").classList.add("active");
});
