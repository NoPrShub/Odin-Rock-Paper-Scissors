let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

// start game
// playGame();

// plays 5 rounds of the game
function playGame() {
    console.log("5 Rounds. Highest Score Wins");
    let i = 1;
    while (i <= 5) {
        console.log("ROUND : " + i)
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        displayRoundResult(humanChoice, computerChoice);
        i++;
    }

    console.log("-------------------------------------------");
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else {
        console.log("YOU LOSE!")
    }
    console.log("RELOAD PAGE TO PLAY AGAIN.");
}

// capitalizes first letter and converts rest to lowercase
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

// returns random number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// returns computer choice
function getComputerChoice() {
    let randNum = randomNumber();
    let computerChoice;

    switch (randNum) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

// takes human input and returns it.
function getHumanChoice() {
    let input = prompt("Enter ROCK or PAPER or SCISSORS(SCISSOR): ");
    let humanChoice;

    if (input.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if (input.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if (input.toLowerCase() === "scissors" || input.toLowerCase() === "scissor") {
        humanChoice = "scissors";
    }
    return humanChoice;
}

// prints human win or lose to console
function displayRoundResult(humanChoice, computerChoice) {
    if (roundWinner === "tie") {
        console.log("It's a tie. Both chose " + capitalizeFirstLetter(computerChoice) + ".");
    } else if (roundWinner === "human") {
        console.log("You win! " + capitalizeFirstLetter(humanChoice) + " beats " 
                    + capitalizeFirstLetter(computerChoice) + ".");
    } else if (roundWinner === "computer") {
        console.log("You lose! " + capitalizeFirstLetter(humanChoice) + " is beaten by "
                    + capitalizeFirstLetter(computerChoice) + ".");
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

// simulates one round of the game
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        roundWinner = "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        roundWinner = "human";
        humanScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        roundWinner = "computer";
        computerScore++;
    }
}
