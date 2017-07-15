
//Variables
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesLeft = 10;

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var random =
  alphabet[Math.floor(Math.random() * alphabet.length)];

//This function resets the number of guesses left/made as well as the selected letter.
var reset = function(){
  guessesLeft=10;
  random = alphabet[Math.floor(Math.random() * alphabet.length)];

  guessesMade = [];
}

//When a key is pressed, it is pushed under Guesses Made. The Guesses Left is updated with the correct count.
document.onkeyup = function(event){

if (event.keyCode >= 65 && event.keyCode <= 90){
  userGuess= event.key.toLowerCase();
  guessesMade.push(userGuess);
  guessesLeft -=1;


//If a user's guess matches the computer guess, the number of wins is updated. The computer chooses a new number / the game is reset.
  if (userGuess === random){
    wins +=1;
    reset();

  }


//If a user uses up the maximum number of guessses, the number of losses is updated. The computer chooses a new number / the game is reset.

if(guessesLeft === 0) {
  losses +=1;
  reset();
}



//Various Console Logs for internal purposes
  console.log(event);
  console.log(guessesMade);
  console.log("we guess " + userGuess);
  console.log("computer guesses " + random);

  //This displays all Javascript functions on the HTML display.

  document.getElementById("winCount").innerHTML = wins;

  document.getElementById("lossCount").innerHTML = losses;

  document.getElementById("triesLeft").innerHTML = guessesLeft;

  document.getElementById("triedGuesses").innerHTML = guessesMade.join(", ")
  



  //Alerts user if a non-letter is selected
}else{
  alert("Not a valid key you idiot!")

}
}
