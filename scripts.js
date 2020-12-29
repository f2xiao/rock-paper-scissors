// Computer randomly return either 'rock', 'paper' or 'scissors'
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
// Play a single round of rock paper scissors
let message = document.querySelector(".message");
function playRound(playerSelection, computerSelection) {
  let winner = "";
  if (playerSelection === computerSelection) {
    message.textContent = "Tie!";
    winner = "Tie";
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
      winner = "human";
    } else {
      message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
      winner = "computer";
    }
  }
  return winner;
}
// Play 5 rounds of Rock Paper Scissors

let result = document.querySelector(".start");
let roundWinner = "";
let humanScore = 0;
let computerScore = 0;

const openModal = function (message) {
  document.querySelector(".modal-again").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector(".modal-again p").textContent = message;
};

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let playerSelection = e.currentTarget.name;
    let computerSelection = computerPlay();
    roundWinner = playRound(playerSelection, computerSelection);
    if (roundWinner === "human") {
      humanScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    } else {
      humanScore++;
      computerScore++;
    }
    document.querySelector(".player-score").textContent = String(humanScore);
    document.querySelector(".computer-score").textContent = String(
      computerScore
    );
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        openModal("You Win 🎉!");
      } else if (computerScore > humanScore) {
        openModal("Sorry 😥.");
      } else if (humanScore === computerScore) {
        openModal("A tie 😎.");
      }
    }
  });
});

const closeModal = function () {
  document.querySelector(".modal-again").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
  computerScore = 0;
  humanScore = 0;
  result.textContent = `👈 Click anyone to start!`;
  message.textContent = `Score 5 to win.`;
  document.querySelector(".player-score").textContent = String(humanScore);
  document.querySelector(".computer-score").textContent = String(computerScore);
};
document.querySelector(".modal-btn").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
document.querySelector(".overlay").addEventListener("click", closeModal);
