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

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
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
    console.log(computerChoice);
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