// capitalizes first letter and converts rest to lowercase
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

// randomNumber(): returns random number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// getComputerChoice(): returns computer choice
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

// getHumanChoice(): takes human input and returns it.
// - if no input is given returns undefined.
function getHumanChoice() {
    let input = prompt("Enter ROCK or PAPER or SCISSORS: ");
    let humanChoice;

    if (input === "" || input === null) return;

    if (input.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if (input.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if (input.toLowerCase() === "scissors" || input.toLowerCase() === "scissor") {
        humanChoice = "scissors";
    }
    return humanChoice;
}

// helper functions return true if human wins
function rockAndPaper(humanChoice, computerChoice) {
    if (humanChoice === "paper") {
        return true;
    }
    return false;
}

function paperAndScissors(humanChoice, computerChoice) {
    if (humanChoice === "scissors") {
        return true;
    }
    return false;
}

function rockAndScissors(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        return true;
    }
    return false;
}

// incrementScore: increments score by 1 for whoever wins
function incrementScore(humanWin) {
    if(humanWin === undefined) {
        return;
    }
    if (humanWin) {
        humanScore++;
    } else {
        computerScore++;
    }
}

// displayResult(): prints human win or lose to console
function displayResult(humanWin, humanChoice, computerChoice) {
    if (humanWin === undefined) {
        console.log("No one wins. Both chose " + capitalize(computerChoice));
    } else if (humanWin) {
        console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
    } else {
        console.log("You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice));
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

// simulates one round of the game
function playRound(humanChoice, computerChoice) {
    if (humanChoice === undefined) {
        console.log("Enter a valid value: ROCK or PAPER or SCISSORS.")
        return;
    }

    // holds true if human wins or undefined if draw
    let humanWin;

    // checks humanWin 
    if (humanChoice === computerChoice) {
        humanWin = undefined;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    humanWin = rockAndPaper(humanChoice, computerChoice);
                } else if (computerChoice === "scissors") {
                    humanWin = rockAndScissors(humanChoice, computerChoice);
                }
                break;

            case "paper":
                if (computerChoice === "scissors") {
                    humanWin = paperAndScissors(humanChoice, computerChoice);
                } else if(computerChoice === "rock") {
                    humanWin = rockAndPaper(humanChoice, computerChoice);
                }
                break;

            case "scissors":
                if(computerChoice === "rock") {
                    humanWin = rockAndScissors(humanChoice, computerChoice);
                } else if(computerChoice === "paper") {
                    humanWin = paperAndScissors(humanChoice, computerChoice);
                }
                break;  
        }
    }

    // increments score and displays result for the round
    incrementScore(humanWin);
    displayResult(humanWin, humanChoice, computerChoice);
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
