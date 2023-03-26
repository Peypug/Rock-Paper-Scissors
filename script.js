let computerScore = 0;
let playerScore = 0;
let rounds = 5  ;

function getComputerChoice() {
  randomNum = Math.ceil(Math.random() * 100) - 1;
  if (randomNum <= 33) {
    removeImages()
    computerImages.appendChild(computerRockImage);
    return "Rock";
    
  } 
  else if (randomNum <= 66) {
    removeImages()
    computerImages.appendChild(computerPaperImage);
    return "Paper";
    
  }
  else if (randomNum <= 99) {
    removeImages()
    computerImages.appendChild(computerScissorsImage);
    return "Scissors";
    
  }
}

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


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const results = document.createElement("h1")
const container = document.querySelector(".container")
const pScore = document.querySelector(".player-score")
const cScore = document.querySelector(".computer-score")

const playerImages = document.querySelector(".player-image");
const computerImages = document.querySelector(".computer-image")

const playerRockImage = document.querySelector(".player-rock-image");
const playerPaperImage = document.querySelector(".player-paper-image");
const playerScissorsImage = document.querySelector(".player-scissors-image");

const computerRockImage = document.querySelector(".computer-rock-image");
const computerPaperImage = document.querySelector(".computer-paper-image");
const computerScissorsImage = document.querySelector(".computer-scissors-image");

playerPaperImage.remove();
playerRockImage.remove();
playerScissorsImage.remove();

computerRockImage.remove();
computerPaperImage.remove();
computerScissorsImage.remove();



function removeImages () {
  playerPaperImage.remove();
  playerRockImage.remove();
  playerScissorsImage.remove();

  computerRockImage.remove();
  computerPaperImage.remove();
  computerScissorsImage.remove();
}

function restart() {
  removeImages()
  let restartChoice = prompt("Would you like to restart?\nYes/No");
  if (restartChoice) {
  restartChoice = restartChoice.toLowerCase();
  if (restartChoice === "yes") {
    playerScore = 0;
    computerScore = 0;
    rock.setAttribute("disabled",false);
    paper.setAttribute("disabled",false);
    scissors.setAttribute("disabled",false);
}
}
}

function playGame(choice) {
  computersChoice = getComputerChoice().toLowerCase();
  results.textContent = round(computersChoice, choice);
  container.appendChild(results)
  pScore.textContent = `Player Score: ${playerScore}`;
  cScore.textContent = `Computer Score: ${computerScore}`;
  if (playerScore == 5 || computerScore == 5) {

    if (playerScore == 5) {
    results.textContent = "You Win!"
    }
    else {
      results.textContent = "You Lose."
    }
    console.log("testing")

    rock.setAttribute("disabled",true);
    paper.setAttribute("disabled",true);
    scissors.setAttribute("disabled",true);
    setTimeout(function () {
      restart();
    }, 1000)
    
    }

  }

rock.addEventListener("click",function () {
  playGame("rock")
  playerImages.appendChild(playerRockImage);
})


paper.addEventListener("click",function () {
  playGame("paper")
  playerImages.appendChild(playerPaperImage);
})

scissors.addEventListener("click",function () {
  playGame("scissors")
  playerImages.appendChild(playerScissorsImage);
})






// function game() {
//   for (i = 0; i < rounds; i++){
//     let playersChoice = prompt("What would you like to pick, Rock, Paper, or Scissors?");
//     playersChoice = playersChoice.toLowerCase();
//     computersChoice = getComputerChoice().toLowerCase();
//     console.log(round(computersChoice, playersChoice))
//     console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
//   }
//   if (playerScore > computerScore){
//     console.log("You win the game!")
//   }
//   else if (computerScore > playerScore) {
//     console.log("The computer beat you!")
//   }
// }

// game()