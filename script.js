function getComputerChoice() {
    let x = Math.random();
    if (x < 0.3) {
        return "rock";
        
    } else {
        if (x > 0.6) {
            return "paper";
        } else {
            return "scissors";
        }
    }
}

function getHumanChoice() {
    let x = prompt("Rock, paper or scissors?");
    return x;
}

let humanScore = 0;
let computerScore = 0;

function playRound(a) {
    let computerChoice = getComputerChoice();
    let humanChoice = a
    console.log(humanChoice);
    console.log(computerChoice);
    let winner = "";
    if (computerChoice == humanChoice) {
        winner = "tie";
    }
    if (computerChoice == "rock" && humanChoice == "paper") {
        winner = "human";
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        winner = "computer";
    }
    if (computerChoice == "paper" && humanChoice == "rock") {
        winner = "computer";
    }
    if (computerChoice == "paper" && humanChoice == "scissors") {
        winner = "human";
    }
    if (computerChoice == "scissors" && humanChoice == "paper") {
        winner = "computer";
    }
    if (computerChoice == "scissors" && humanChoice == "rock") {
        winner = "human";
    }

    if (winner == "human") {
        humanScore = humanScore + 1;
    }
    if (winner == "computer") {
        computerScore = computerScore + 1;
    }

    console.log("Your score is: " + humanScore);
    console.log("The computer score is: " + computerScore);

    return winner;
}

const ul = document.querySelector("ul");
const results = document.querySelector("div");

// create button elements for each player choice,
// event listeners for each that trigger a game
const butRock = document.createElement("button");
butRock.textContent = "Rock";
ul.appendChild(butRock);
butRock.addEventListener("click", () => {
    playRound("rock");
    scoreUpdate();
});

const butScissors = document.createElement("button");
butScissors.textContent = "Scissors";
ul.appendChild(butScissors);
butScissors.addEventListener("click", () => {
    playRound("scissors");
    scoreUpdate();
});

const butPaper = document.createElement("button");
butPaper.textContent = "Paper";
ul.appendChild(butPaper);
butPaper.addEventListener("click", () => {
    playRound("paper");
    dispHum.textContent = "Your score is: " + humanScore;
    dispComp.textContent = "The computer score is: " + computerScore;
    scoreUpdate();
});

// display scores
const dispHum = document.createElement("span");
const dispComp = document.createElement("span");

function scoreUpdate() {
    dispHum.textContent = "Your score is: " + humanScore;
    dispComp.textContent = "The computer score is: " + computerScore;
};

scoreUpdate();

results.appendChild(dispHum);
results.appendChild(dispComp);



// function playGame() {
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();
// }