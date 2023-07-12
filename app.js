const options = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0
let rounds = 0

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    return options[randomInt];
}

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

// Play the game 5 times
for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Choose rock, paper or scissors: ").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    rounds += 1
}

// Check the winner after the loop
console.log("End of game")
if (playerScore > computerScore) {
    console.log("Congratulations, you win!");
  } else if (playerScore < computerScore) {
    console.log("You lose, better luck next time!");
  } else {
    console.log("It's a tie!");
  }
