document.addEventListener("DOMContentLoaded", function () {
    // Function to get computer's choice
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to play a single round of Rock Paper Scissors
    function playRound(playerSelection, computerSelection) {
        const playerChoice = playerSelection.toLowerCase();
        const computerChoice = computerSelection.toLowerCase();

        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    // Initialize scores
    let playerScore = 0;
    let computerScore = 0;
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const resultsDisplay = document.getElementById('results');

    // Function to update scores and check for winner
    function updateScore() {
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        if (playerScore === 5) {
            resultsDisplay.textContent = "Congratulations! You win the game!";
            disableButtons();
        } else if (computerScore === 5) {
            resultsDisplay.textContent = "You lost the game. Better luck next time!";
            disableButtons();
        }
    }

    // Function to disable buttons after game over
    function disableButtons() {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }

    // Function to enable buttons
    function enableButtons() {
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
    }

    // Event listener for player selections
    document.getElementById('rock').addEventListener('click', function () {
        const computerSelection = getComputerChoice();
        const result = playRound('Rock', computerSelection);
        resultsDisplay.textContent = result;
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        updateScore();
    });

    document.getElementById('paper').addEventListener('click', function () {
        const computerSelection = getComputerChoice();
        const result = playRound('Paper', computerSelection);
        resultsDisplay.textContent = result;
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        updateScore();
    });

    document.getElementById('scissors').addEventListener('click', function () {
        const computerSelection = getComputerChoice();
        const result = playRound('Scissors', computerSelection);
        resultsDisplay.textContent = result;
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        updateScore();
    });

    // Event listener for restart button
    document.getElementById('restart').addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        resultsDisplay.textContent = '';
        enableButtons();
    });
});
