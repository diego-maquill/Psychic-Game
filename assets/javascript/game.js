var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersEntered = [];
var randomCharacter = [];

var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
randomCharacter.push(computerGuess)
console.log(computerGuess[0]);

// Here are my functions
function countGuessesLeft() {
    document.querySelector("#guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
}

function letters_guessed() {
    document.querySelector("#letters").innerHTML = "You Guesses so far: " + lettersEntered.join(',');
}
function restart() {
    guessesLeft = 9;
    lettersEntered.length = 0;
    randomCharacter.length = 0;
    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    randomCharacter.push(computerGuess)
}

document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    lettersEntered.push(userGuess);
    countGuessesLeft();
    letters_guessed();

    if ((userGuess === randomCharacter[0]) && (guessesLeft > 0)) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if ((userGuess !== randomCharacter[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }
    else {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
}