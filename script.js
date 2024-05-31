// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

// Select DOM elements for interaction
const submit = document.querySelector('#subt'); // Button to submit a guess
const userInput = document.querySelector('#guessField'); // Input field for user's guess
const startOver = document.querySelector('.resultParas'); // Element to append the "start new game" button
const guessSlot = document.querySelector('.guesses'); // Element to display previous guesses
const remaining = document.querySelector('.lastResult'); // Element to display remaining guesses
const lowOrHi = document.querySelector('.lowOrHi'); // Element to display feedback message
const currentPlayerSpan = document.getElementById('currentPlayer'); // Element to display current player
const player1ScoreSpan = document.getElementById('player1Score'); // Element to display Player 1 score
const player2ScoreSpan = document.getElementById('player2Score'); // Element to display Player 2 score

// Create a paragraph element to hold the "start new game" button
const p = document.createElement('p');

// Initialize variables for game logic
let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Counter for the number of guesses
let playGame = true; // Boolean to track if the game is active
let currentPlayer = 1; // Track the current player
let maxGuesses = 8; // Maximum number of guesses per player
let player1Score = 0; // Player 1 score
let player2Score = 0; // Player 2 score

// Add event listener to the submit button if the game is active
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Get the user's guess from the input field
        validateGuess(guess); // Validate and process the guess
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) { // Check if the guess is not a number
        alert(`Please enter a valid number. You entered: ${guess}`);
    } else if (guess < 1) { // Check if the guess is less than 1
        alert(`Please enter a number greater than 1. You entered: ${guess}`);
    } else if (guess > 100) { // Check if the guess is greater than 100
        alert(`Please enter a number less than or equal to 100. You entered: ${guess}`);
    } else {
        prevGuess.push(guess); // Add the guess to the list of previous guesses
        displayGuess(guess); // Display the guess
        checkGuess(guess); // Check if the guess is correct
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) { // If the guess is correct
        displayMessage(`Congratulations! Player ${currentPlayer} guessed it right!`);
        if (currentPlayer === 1) {
            player1Score++;
            player1ScoreSpan.textContent = player1Score;
        } else {
            player2Score++;
            player2ScoreSpan.textContent = player2Score;
        }
        endRound(); // End the round
    } else if (guess < randomNumber) { // If the guess is too low
        displayMessage(`Too low! Try again, Player ${currentPlayer}.`);
    } else if (guess > randomNumber) { // If the guess is too high
        displayMessage(`Too high! Try again, Player ${currentPlayer}.`);
    }
    if (numGuess >= maxGuesses) { // If the maximum number of guesses is reached
        endRound(); // End the round
    } else {
        numGuess++; // Increment the guess counter
        remaining.textContent = maxGuesses - numGuess + 1; // Update the remaining guesses display
    }
}

// Function to display the guess and update the UI
function displayGuess(guess) {
    userInput.value = ''; // Clear the input field
    if (prevGuess.length === 1) { // Check if it's the first guess for the current player
        guessSlot.innerHTML += `Player ${currentPlayer}: ${guess}`; // Add the player's first guess
    } else {
        guessSlot.innerHTML += `, ${guess}`; // Add subsequent guesses
    }
}

// Function to display a message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message
}

// Function to end the round
function endRound() {
    if (currentPlayer === 1) {
        switchPlayer(); // Switch to Player 2
        startNewRound(); // Start a new round for Player 2
    } else {
        determineWinner(); // Determine the winner after Player 2 has played
    }
}

// Function to start a new round for the next player
function startNewRound() {
    if (player1Score === 1 && numGuess < 8) {
        numGuess = 0; // Reset the guess counter
        if (currentPlayer === 2) {
            // Generate a new random number for Player 2
            randomNumber = parseInt(Math.random() * 100 + 1);
            // Display the new random number for Player 2 (for demonstration purposes)
            console.log("New random number for Player 2: " + randomNumber);
        }
        prevGuess = []; // Reset the list of previous guesses
        guessSlot.innerHTML = ''; // Clear the guesses display
        lowOrHi.innerHTML = ''; // Clear the feedback message
        remaining.textContent = maxGuesses; // Reset the remaining guesses display for both players
    } else {
        numGuess = 1; // Reset the guess counter
        if (currentPlayer === 2) {
            // Generate a new random number for Player 2
            randomNumber = parseInt(Math.random() * 100 + 1);
            // Display the new random number for Player 2 (for demonstration purposes)
            console.log("New random number for Player 2: " + randomNumber);
        }
        prevGuess = []; // Reset the list of previous guesses
        guessSlot.innerHTML = ''; // Clear the guesses display
        lowOrHi.innerHTML = ''; // Clear the feedback message
        remaining.textContent = maxGuesses; // Reset the remaining guesses display for both players
    }

}

// Function to switch the current player
function switchPlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
        currentPlayerSpan.textContent = 'Player 2';
    }
}

// Function to determine the winner
function determineWinner() {
    let winnerMessage;
    if (player1Score > player2Score) {
        winnerMessage = 'Player 1 wins!';
    } else if (player2Score > player1Score) {
        winnerMessage = 'Player 2 wins!';
    } else {
        winnerMessage = 'It\'s a draw!';
    }
    displayMessage(winnerMessage);
    endGame(); // End the game
}

// Function to end the game
function endGame() {
    userInput.value = ''; // Clear the input field
    userInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a class to the paragraph element
    p.innerHTML = `<h4 id="newGame" style="color: white; background-color: #58046d; padding: 10px; border-radius: 5px; cursor: pointer; text-align: center;">START NEW GAME</h4>`; // Add the "start new game" button
    startOver.appendChild(p); // Append the button to the DOM
    playGame = false; // Set the game status to inactive
    newGame(); // Initialize the new game logic
}

// Function to initialize a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Select the "start new game" button
    newGameButton.addEventListener('click', function (e) { // Add click event listener to the button
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        prevGuess = []; // Reset the list of previous guesses
        numGuess = 1; // Reset the guess counter
        currentPlayer = 1; // Reset to Player 1
        player1Score = 0; // Reset Player 1 score
        player2Score = 0; // Reset Player 2 score
        guessSlot.innerHTML = ''; // Clear the guesses display
        remaining.innerHTML = maxGuesses; // Reset the remaining guesses display
        lowOrHi.innerHTML = ''; // Clear the feedback message
        currentPlayerSpan.textContent = 'Player 1'; // Reset the current player display
        player1ScoreSpan.textContent = player1Score; // Reset Player 1 score display
        player2ScoreSpan.textContent = player2Score; // Reset Player 2 score display
        p.remove(); // Remove the "start new game" button
        userInput.removeAttribute('disabled'); // Enable the input field
        playGame = true; // Set the game status to active
    });
}