// randomNumber(): returns random number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// getComputerChoice(): returns computer choice
function getComputerChoice() {
    let randNum = randomNumber();
    let computerChoice;

    switch(randNum) {
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
