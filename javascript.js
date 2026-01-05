let humanScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector(".score");
const messageDiv = document.querySelector(".message");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    n = Math.random()
    if (n < 1 / 3) {
        return "rock"
    } else if (n >= 1 / 3 && n < 2 / 3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    // Check who winner is, display message, and update score
    if (humanChoice === computerChoice) {
        messageDiv.textContent = `Tie (${humanChoice} : ${computerChoice})`;
    } else if (
        humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        messageDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++
    } else {
        messageDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++
    }
    scoreDiv.textContent = `You ${humanScore} : ${computerScore} Computer`

    // If the game has ended, display winner and restart button
//     if (humanScore === 5 || computerScore === 5) {

//     }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(event.target.id, getComputerChoice());
    })
});