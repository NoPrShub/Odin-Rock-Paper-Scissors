let humanScore = 0;
let computerScore = 0;
let roundWinner = "";
let currentRoundNumber = 0;


function isGameOver() {
    return currentRoundNumber == 5;
}

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

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

function playRound(humanChoice, computerChoice) {

    currentRoundNumber++;
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

// UI

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundStatus = document.querySelector(".round-status p");
const humanScoreSpan = document.querySelector("#human-score span");
const computerScoreSpan = document.querySelector("#computer-score span");
const endGameDialog = document.querySelector("#dialog");
const restartBtn = document.querySelector("#restart-game");
const gameEndMessage = document.querySelector("#game-result");
const humanSignImg = document.querySelector("#human-sign-img");
const computerSignImg = document.querySelector("#computer-sign-img");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
restartBtn.addEventListener("click", () => {
    restart();
    endGameDialog.close();
});

function handleClick(humanSelection) {
    if (isGameOver()) {
        gameEndMessage.textContent = updateGameResult();
        endGameDialog.showModal();
        return;
    }
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    updateSigns(humanSelection, computerSelection);
    displayRoundResult(humanSelection, computerSelection);
    if (isGameOver()) {
        gameEndMessage.textContent = updateGameResult();
        endGameDialog.showModal();
    }
}

function updateGameResult() {
    if (humanScore > computerScore) {
        roundStatus.textContent = "You Win";
    } else if (humanScore < computerScore) {
        roundStatus.textContent = "You Lose";
    } else {
        roundStatus.textContent = "It's a tie!";
    }
    return roundStatus.textContent;
}

function displayRoundResult(humanSelection, computerSelection) {
    if (roundWinner === "tie") {
        roundStatus.textContent = `It's a tie. Both chose ${capitalizeFirstLetter(computerSelection)}.`;
    } else if (roundWinner === "human") {
        roundStatus.textContent = `You Win! ${capitalizeFirstLetter(humanSelection)} beats 
                    ${capitalizeFirstLetter(computerSelection)}.`;
    } else if (roundWinner === "computer") {
        roundStatus.textContent = `You lose! ${capitalizeFirstLetter(humanSelection)} is beaten by
                    ${capitalizeFirstLetter(computerSelection)}.`;
    }
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}


function updateSigns(humanSelection, computerSelection) {
    humanSignImg.width = 100;
    switch(humanSelection) {
        case "rock":
            humanSignImg.src = "./icons/fist.png";
            humanSignImg.alt = "image-of-rock";
            break;
        case "paper":
            humanSignImg.src = "./icons/hand-paper.png";
            humanSignImg.alt = "image-of-paper";
            break;
        case "scissors":
            humanSignImg.src = "./icons/scissors.png";
            humanSignImg.alt = "image-of-scissors";
            break;
    }

    computerSignImg.width = 100;
    switch(computerSelection) {
        case "rock":
            computerSignImg.src = "./icons/fist.png";
            computerSignImg.alt = "image-of-rock";
            break;
        case "paper":
            computerSignImg.src = "./icons/hand-paper.png";
            computerSignImg.alt = "image-of-paper";
            break;
        case "scissors":
            computerSignImg.src = "./icons/scissors.png";
            computerSignImg.alt = "image-of-scissors";
            break;
    }
}

function restart() {
    humanScore = 0;
    computerScore = 0;
    roundWinner = "";
    currentRoundNumber = 0;

    roundStatus.textContent = "5 Rounds. Highest Score Wins.";
    humanScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    
    computerSignImg.src = "#";
    computerSignImg.alt = "#";
    humanSignImg.src = "#";
    humanSignImg.alt = "#";
}
