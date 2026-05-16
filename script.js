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

    if(input === "" || input === null) return;

    if(input.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if(input.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if(input.toLowerCase() === "scissors" || input.toLowerCase() === "scissor") {
        humanChoice = "scissors";
    } 
    return humanChoice;
}

function rockAndPaper(humanChoice, computerChoice) {
    if(humanChoice === "paper") {
        return true;
    }
    return false;
}

function paperAndScissors(humanChoice, computerChoice) {
    if(humanChoice === "scissors") {
        return true;
    }
    return false;
}

function rockAndScissors(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        return true;
    }
    return false;
}

// function playRound(humanChoice, computerChoice) {
//     if(humanChoice === undefined) {
//         console.log("Enter a valid value: ROCK or PAPER or SCISSORS.")
//         return;
//     }
    
//     if(humanChoice === computerChoice) {
//         console.log("No one wins. Both chose " + computerChoice);
//     } else if(humanChoice === "rock" && computerChoice === "paper") {
//         console.log("")
//     }
// }

// let humanScore = 0;
// let computerScore = 0;

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);
