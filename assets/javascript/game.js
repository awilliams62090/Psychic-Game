var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = null;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var reset = function () {
    guessesLeft = 9;
    guessesSoFar = [];
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    updateguessesLeft()
    updateguessesSoFar()
}
var updateguessesLeft = function () {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft
}
var updateguessesSoFar = function () {
    document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessesSoFar.join(", ")
}
document.onkeyup = function (event) {
    console.log(event)
    var letterGuessed = event.key
    guessesSoFar.push(letterGuessed)
    guessesLeft--
    updateguessesLeft()
    updateguessesSoFar()
    if (letterGuessed === randomLetter) {
        alert ("Amazing! You read my mind!") + reset() + wins++;
        $("#wins").text("Wins: " + wins)
    } else if (letterGuessed !== randomLetter) {
        updateguessesLeft();
    }
    if (guessesLeft < 0) {
        alert ("Sorry, you've lost! Play again!") + reset() + losses++;
        $("#losses").text("Losses: " + losses)
    } else {
        updateguessesLeft()
    }
   
}
