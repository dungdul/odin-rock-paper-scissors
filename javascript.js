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

function getHumanChoice() {
    return prompt("Input your choice")
}

function playGame() {

    // Players' scores
    let humanScore = 0
    let computerScore = 0 

    // Function for playing 1 game
    function playRound(humanChoice, computerChoice) {

        // Make humanChoice case insensitive
        humanChoice = humanChoice.toLowerCase()

        // Check who winner is, print message, and increment score
        if (humanChoice === computerChoice) {
            console.log(`Tie (${humanChoice} : ${computerChoice})`)
        } else if (
            humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock"
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++
        }
    }

    // Play game for 5 times
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    // Declare winner
    if (humanScore > computerScore) {
        console.log(`You win! (${humanScore}:${computerScore})`)
    } else {
        console.log(`You lose! (${computerScore}:${humanScore})`)
    }
}