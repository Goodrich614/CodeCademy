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

const determineWinner = (userChoice, computerChoice) => {
    let message;
    if (userChoice === computerChoice) {
        message = 'Tie!'
        return message;
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            message = 'You lost! :('
        }
        else {
            message = 'You win! :)'
        }
        return message;
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            message = 'You lost! :('
        }
        else {
            message = 'You win! :)'
        }
        return message;
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            message = 'You lost! :('
        }
        else {
            message = 'You win! :)'
        }
        return message;
    }

}

let gameNum = 1;

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice('rock');

    gameNum = gameNum + 1;

    console.log('Game: ' + gameNum)
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}

playGame();
