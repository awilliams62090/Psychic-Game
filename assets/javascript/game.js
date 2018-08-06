var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = null;
var errormessage = "The Psychic got you! The letter was ";
var winmessage = "Amazing! You read my mind! The letter was ";
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var reset = function () {
    guessesLeft = 9;
    guessesSoFar = [];
    initialize();
    updateguessesLeft();
    updateguessesSoFar();
};

var initialize = function () {
    if (guessesLeft === 9) {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log("rando =" + randomLetter)
    }
};
var updateguessesLeft = function () {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};
var updateguessesSoFar = function () {
    document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessesSoFar.join(", ");
};
document.onkeyup = function (event) {
    console.log(event);
    initialize();
    var letterGuessed = event.key;
    guessesSoFar.push(letterGuessed);
    guessesLeft--;
    updateguessesLeft();
    updateguessesSoFar();
    if (letterGuessed === randomLetter) {
        var msg2 = winmessage.concat(randomLetter);
        alert(msg2) + reset() + wins++;
        $("#wins").text("Player: " + wins);
    }

    if (guessesLeft < 0) {
        var msg = errormessage.concat(randomLetter);
        alert(msg) + reset() + losses++;
        $("#losses").text("Psychic: " + losses);
    }

}