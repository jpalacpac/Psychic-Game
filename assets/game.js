
// - GOAL: Guess the letter from A to Z that is chosen by the computer before you run out of attempted guesses.

// create a variable that stores all of the letters that the computer randomly chooses
// creat a formula that makes the computer randomly choose a letter
// ask the user to guess which letter the computer has chosen
// keep track of the guesses, letters guessed, wins, losses
// if the user guesses the same letter chosen by the computer, the user wins the round
// if the user guesses the wrong letter, deduct one guess from the user
// when attempted guesses reaches zero the game is over
// display the score of wins losses and letters guessed


 //This array holds the possible letter choices
 var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// These variables keeps the values of each item
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Displays the
var guessedLetters = [];
var userChoice = null;




//create a formula that makes the computer randomly choose a letter
 var compChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
 console.log( "Computer picks " + compChoice );

//waits for key pressed
document.onkeyup = function(event) {

var userChoice = event.key
console.log(userChoice);

// adds the players guesses to display in the guessedLetters array if its not the letter compChoice picked.
// prevents the user from being deducted from guessesLeft if the same letter is pressed.
// deducts guessesLeft when a new letter is pressed that is not the letter computer has chosem.
// alerts user to choose different letter.
if (guessedLetters.indexOf(userChoice) < 0 && letterChoices.indexOf(userChoice) >= 0) {
		guessedLetters[guessedLetters.length] = userChoice;
		guessesLeft--;
} else {
	alert("Stop picking the same letter, Human.")
}

// if the user guesses the same letter chosen by the computer, the user wins the round
if (compChoice === userChoice) {
		wins++;
		alert("Well played, Human. BEEEP...BOOP...BEEP");
		console.log("You won!");
		guessesLeft = 9;
		guessedLetters = [];
		compChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
		console.log("New Pick " + compChoice);
	}

// when attempted guesses reaches zero the game is over
if (guessesLeft === 0) {
		losses++;
		alert("Can't touch this! NAaa NA NA NA!");
		console.log("You lost!");
		guessesLeft = 9;
		guessedLetters = [];
		compChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
		console.log("New Pick " + compChoice);
	}

console.log("wins: " + wins + " losses: " + losses + " Guesses Left: " + guessesLeft);

// keeps track of the guesses, letters guessed, wins, losses
var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess the letter I picked human:</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessedLetters + "</h4></p>";
	
	// display the score of wins losses and letters guessed
	document.querySelector("#game").innerHTML = html;

};
