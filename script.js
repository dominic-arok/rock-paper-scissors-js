function getComputerChoice() {
    let random_num = Math.floor(Math.random() * 3);
    let computer_choice;

    if (random_num === 0) {
        computer_choice = "rock";
    }
    else if (random_num === 1) {
        computer_choice = "paper";
    }
    else {
        computer_choice = "scissors";
    }
    return computer_choice;
}

function getHumanChoice() {
    let isValid = false;
    let user_choice;
    
    while (isValid == false) {
        user_choice = (prompt("Enter your choice: rock, paper, or scissors: ").toLowerCase());
        if (user_choice === "rock" || user_choice === "paper" || user_choice === "scissors") {
            isValid = true;
        }
    }
    
    return user_choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice == "rock") {
                console.log("You tied! You both picked rock.")
            }
            else if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock.")
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors.")
                humanScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice == "rock"){
                console.log("You win! Paper beats rock.")
                humanScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You tied! You both picked paper.")
            }
            else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats paper.")
                computerScore++;
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice == "rock"){
                console.log("You lose! Rock beats scissors.")
                computerScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper.")
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You tied! You both picked scissors.")
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You ended the game with a win!")
    }
    else if (humanScore === computerScore) {
        console.log("You ended the game with a tie!")
    }
    else if (humanScore < computerScore) {
        console.log("You ended the game with a loss!")
    }
}

playGame();