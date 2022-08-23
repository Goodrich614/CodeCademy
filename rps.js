const getUserChoice = (input) => {
    input = input.toLowerCase();

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    }
    else {
        console.log("Please enter 'rock', 'paper', or 'scissors'.")
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let yourScore = 0;
let computerScore = 0;

const determineWinner = (userChoice, computerChoice) => {
    let message;
    

    if (userChoice === computerChoice) {
        message = 'Tie! \nYou both through ' + userChoice;
        return message;
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            message = 'The paper wins the rock: You lose! :('
            computerScore++;
            console.log(computerScore);
        }
        else {
            message = 'Rock is the better on scissors: You win! :)'
            yourScore++;
            console.log(yourScore);
        }
        return message;
    }
    
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            message = 'Rocks beats those scissor: You lose! :('
            computerScore++;
            console.log(computerScore);
        }
        else {
            message = 'Scissor won at the papers: You win! :)'
            yourScore++;
            console.log(yourScore);
        }
        return message;
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            message = 'Scissors beat the paper: You lose! :('
            computerScore++;
            console.log(computerScore);
        }
        else {
            message = 'Papers beat those rocks: You win! :)'
            yourScore++;
            console.log(yourScore);
        }
        return message
        
    }
}

const playGame = () => {

    let gameNum;

    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    gameCount();

    console.log('========== Game: ' + gameNum + ' ==========')
    console.log('========== Your score: ' + yourScore + ' ==========')
    console.log('========== Computer score: ' + computerScore + ' ==========')
    console.log('You through: ' + userChoice);
    console.log('The computer through: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}

const gameCount = (gameNum) => {
    gameNum+=1;
    return gameNum;
}

playGame();
