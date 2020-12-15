// Computer randomly return either 'rock', 'paper' or 'scissors'
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
// Play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let winner = "";
  if (playerSelection === computerSelection) {
    console.log("Tie!");
    winner = "Tie";
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      winner = "human";
    } else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      winner = "computer";
    }
  }
  return winner;
}
// Play 5 rounds of Rock Paper Scissors
function game() {
  let winner = "";
  let roundWinner = "";
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Please enter one: rock, paper or scissors"
    ).toLowerCase();
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
  }

  if (humanScore > computerScore) {
    console.log(humanScore, computerScore, "You win!");
    winner = "human";
  } else if (computerScore > humanScore) {
    console.log(humanScore, computerScore, "You lose!");
    winner = "computer";
  } else if (humanScore === computerScore) {
    console.log(humanScore, computerScore, "Tie!");
    winner = "tie";
  }
  return winner;
}
game();
