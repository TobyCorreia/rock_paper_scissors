const options = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0
let rounds = 0

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    return options[randomInt];
}

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return `It's a draw, you both chose ${playerSelection}.`;
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1
    return "You win, rock beats scissors!";
}
else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1
    return "You lose, paper beats rock!";
}
else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1
    return "You lose, scissors beats paper!";
}
else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1
    return "You win, paper beats rock!";
}
else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1
    return "You lose, rock beats scissors!";
}
else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1
    return "You win, scissors beats paper!";
}
else {
    computerScore += 1
    return "You lose, invalid input.";
} 
}

// Get references to the three buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Get a reference to the result, round and score div
const resultDiv = document.getElementById('result');
const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');
const roundDiv = document.getElementById('round');

// Show rounds
playerScoreDiv.textContent = "Player score: " + playerScore;
roundDiv.textContent = "Round: " + rounds;
computerScoreDiv.textContent = "Computer score: " + computerScore;

// Event listeners for the buttons
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('rock', computerSelection);
    rounds += 1;
    displayResults(result, computerScore, playerScore, rounds);
    checkWinner(rounds, playerScore, computerScore);
  });

  paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('paper', computerSelection);
    rounds += 1;
    displayResults(result, computerScore, playerScore, rounds);
    checkWinner(rounds, playerScore, computerScore);
  });

  scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    const result = playRound('scissors', computerSelection);
    rounds += 1;
    displayResults(result, computerScore, playerScore, rounds);
    checkWinner(rounds, playerScore, computerScore);
  });

// Function to display the result, score and round in the divs
function displayResults(result, computerScore, playerScore, rounds) {
    resultDiv.textContent = result;
    computerScoreDiv.textContent = "Computer score: " + computerScore;
    playerScoreDiv.textContent = "Player score: " + playerScore;
    roundDiv.textContent = "Round: " + rounds;
  }

// Function to check the winner
function checkWinner(round, playerScore, computerScore) {
  if (round === 5) {
    console.log("End of game")
    rounds = 0
    if (playerScore > computerScore) {
      console.log("Congratulations, you win!");
    } else if (playerScore < computerScore) {
      console.log("You lose, better luck next time!");
    } else {
      console.log("It's a tie!");
    }
  }
}




