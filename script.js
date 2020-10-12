const computerPlay = () => {
  choiceArray = ["Rock", "Paper", "Scissors"];
  choiceIndex = Math.floor(Math.random() * 3);
  return choiceArray[choiceIndex];
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

let container = document.querySelector("#container");

const roundClick = (event) => {
  round(event.target.textContent, computerPlay());
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", roundClick);
});

let playerWins = 0;
let computerWins = 0;
let playerWinsElement = document.createElement("h3");
playerWinsElement.textContent = `Player rounds won: ${playerWins}`;
let computerWinsElement = document.createElement("h3");
computerWinsElement.textContent = `Computer rounds won: ${computerWins}`;
const scores = document.createElement("div");
scores.classList.add("scores");
scores.appendChild(playerWinsElement);
scores.appendChild(computerWinsElement);
container.appendChild(scores);

let results = document.createElement("div");

container.appendChild(results);

let roundCount = 0;

const round = (playerSelection, computerSelection) => {
  let winMap = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };
  if (winMap[playerSelection] === computerSelection) {
    let result = document.createElement("p");
    result.textContent = `You win: ${playerSelection} beats ${computerSelection}`;
    results.appendChild(result);
    playerWins++;
  }
  if (winMap[computerSelection] === playerSelection) {
    let result = document.createElement("p");
    result.textContent = `You lose: ${computerSelection} beats ${playerSelection}`;
    results.appendChild(result);
    computerWins++;
  }
  if (computerSelection === playerSelection) {
    let result = document.createElement("p");
    result.textContent = `Tie: Both players chose ${computerSelection}`;
    results.appendChild(result);
  }
  playerWinsElement.textContent = `Player rounds won: ${playerWins}`;
  computerWinsElement.textContent = `Computer rounds won: ${computerWins}`;
  roundCount++;
  if (roundCount === 5) {
    buttons.forEach((button) => {
      button.removeEventListener("click", roundClick);
    });

    let result = document.createElement("h2");
    if (playerWins > computerWins) {
      result.textContent = "YOU WIN THE MATCH!";
      results.appendChild(result);
    } else if (playerWins < computerWins) {
      result.textContent = "You lost the match...";
      results.appendChild(result);
    } else {
      result.textContent = "Tie!";
      results.appendChild(result);
    }
    let playAgain = document.createElement("p");
    playAgain.textContent = "Play again?";
    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "One more time";
    playAgainButton.addEventListener("click", () => {
      location.reload();
    });
    results.appendChild(playAgain);
    results.appendChild(playAgainButton);
  }
};
