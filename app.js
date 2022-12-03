const scores = [0, 0];
let roundScore = 0;
let isPlaying = true;
let currentTurn = 1;

const roll = document.querySelector(".roll");

roll.addEventListener("click", () => {
  let rollValue = Math.floor(Math.random() * 6) + 1;
  let diceValue = document.querySelector(".dice-pos");
  if (isPlaying) {
    diceValue.src = "./img/dice-" + rollValue + ".png";
  }
  if (rollValue !== 1) {
    roundScore += rollValue;
    let scoreValue = document.querySelector("#current-score-" + currentTurn);
    // console.log(scoreValue);
    scoreValue.textContent = roundScore;
  }
});
