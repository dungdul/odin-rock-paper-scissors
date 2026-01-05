let humanScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector(".score");
const messageDiv = document.querySelector(".message");
const buttonsDiv = document.querySelector(".buttons");
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
    if (humanScore === 5) {
        messageDiv.textContent = "You win!";
        endGame();
    } else if (computerScore === 5) {
        messageDiv.textContent = "You lose!";
        endGame();
    }
}

function endGame() {
    buttons.forEach((button) => button.remove());

    // Display restart button
    const restartButton = document.createElement("button");
    buttonsDiv.append(restartButton);
    restartButton.textContent = "Restart"
    restartButton.addEventListener("click", () => {
        restart();
        buttonsDiv.append(...buttons);
        restartButton.remove();
    })
}

function restart() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = "You 0 : 0 Computer";
    messageDiv.textContent = "Choose your move!";
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playRound(event.target.id, getComputerChoice());
    })
});

restart();