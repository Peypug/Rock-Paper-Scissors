function getComputerChoice() {
  randomNum = Math.ceil(Math.random() * 100) - 1;
  if (randomNum <= 33) {
    return "Rock";
  } 
  else if (randomNum <= 66) {
    return "Paper";
  }
  else if (randomNum <= 99) {
    return "Scissors";
  }
}


let computerScore = 0;
let playerScore = 0;
let rounds = 5  ;

function round(computersChoice, playersChoice) {
if (computersChoice == "rock" && playersChoice == "scissors") {
  computerScore += 1
  return (`Computer wins, ${computersChoice} beats ${playersChoice}!` )
}
else if (computersChoice == "scissors" && playersChoice == "paper") {
  computerScore += 1
  return (`Computer wins, ${computersChoice} beats ${playersChoice}!` )
}
else if (computersChoice == "paper" && playersChoice == "rock") {
  computerScore += 1
  return (`Computer wins, ${computersChoice} beats ${playersChoice}!` )
}
else if (computersChoice == "scissors" && playersChoice == "rock") {
  playerScore += 1
  return (`You win, ${playersChoice} beats ${computersChoice}!` )
}
else if (computersChoice == "paper" && playersChoice == "scissors") {
  playerScore += 1
  return (`You win, ${playersChoice} beats ${computersChoice}!` )
}
else if (computersChoice == "rock" && playersChoice == "paper") {
  playerScore += 1
  return (`You win, ${playersChoice} beats ${computersChoice}!` )
}
else {
  rounds += 1
  return ("Tie!")
}
}

// let playersChoice = prompt("What would you like to pick, Rock, Paper, or Scissors?");
// playersChoice = playersChoice.toLowerCase();
// computersChoice = getComputerChoice().toLowerCase();
// console.log(round(computersChoice, playersChoice))

function game() {
  for (i = 0; i < rounds; i++){
    let playersChoice = prompt("What would you like to pick, Rock, Paper, or Scissors?");
    playersChoice = playersChoice.toLowerCase();
    computersChoice = getComputerChoice().toLowerCase();
    console.log(round(computersChoice, playersChoice))
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
  }
  if (playerScore > computerScore){
    console.log("You win the game!")
  }
  else if (computerScore > playerScore) {
    console.log("The computer beat you!")
  }
}

game()