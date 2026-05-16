// randomNumber(): returns random number between 1 and 3 inclusive
function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

// getComputerChoice(): returns computer choice
function getComputerChoice() {
    let randNum = randomNumber();
    let guess;

    switch(randNum) {
        case 1:
            guess = "rock";
            break;
        case 2:
            guess = "paper";
            break;
        case 3:
            guess = "scissors";
            break;
    }
    return guess;
}
