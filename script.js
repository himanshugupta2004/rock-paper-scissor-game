const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultDiv = document.getElementById("result");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const compChoice = choices[Math.floor(Math.random() * 3)];
    playRound(userChoice, compChoice);
  });
});

function playRound(user, comp) {
  if (user === comp) {
    resultDiv.textContent = `It's a draw! Both chose ${user}`;
  } else if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultDiv.textContent = `You Win! ${user} beats ${comp}`;
  } else {
    compScore++;
    compScoreSpan.textContent = compScore;
    resultDiv.textContent = `You Lose! ${comp} beats ${user}`;
  }
}
