# Guess-Game-Arena-Duel
Guess Game Arena Duel Game using JavaScript
Welcome to Guess Game Arena Duel, a competitive number guessing game for two players. Each player takes turns trying to guess a random number between 1 and 100. The player who guesses the number correctly first, or comes closest within the limited number of attempts, wins the round. Let's dive into the details!


Project Overview
Guess Game Arena Duel Game is a simple, fun, and engaging web-based game where two players compete to guess a random number. The game keeps track of each player's score and alternates turns between the players. The player with the most correct guesses at the end of multiple rounds is declared the winner.

Features
Two-player mode with alternating turns
Random number generation between 1 and 100
8 attempts per player to guess the correct number
Score tracking for each player
Responsive and modern design
User-friendly interface
Technologies Used
HTML
CSS
JavaScript
Getting Started
To get a local copy up and running follow these simple steps.

Game Rules
The game generates a random number between 1 and 100 at the start of each round.
Players take turns to guess the number.
Each player has 8 attempts to guess the correct number.
Feedback is provided after each guess:
"Too low! Try again, Player X."
"Too high! Try again, Player X."
"Congratulations! Player X guessed it right!"
The round ends when:
A player guesses the correct number.
A player uses all 8 attempts.
The score is updated after each round:
The player who guessed correctly gets a point.
The game continues until a specified number of rounds are played.
The player with the highest score at the end of all rounds wins the game.
Players can start a new game at any time.
File Structure
graphql
Copy code
guess-game-arena-duel/
├── index.html        # The main HTML file
├── style.css         # The main CSS file
└── script.js         # The main JavaScript file
