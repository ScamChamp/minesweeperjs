// declare global variables
var guess = 0; // the user's guess
var target = 0; // number to be guessed
var guesses = 0; // count the guesses
var message = ""; // message at top of page

function randomNumber(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function setup() {
  newgame();
  myyyFunction();
  myyFunction();
  myFunction()
}

function newgame() {
  // initialise variables for a new game
  guess = 0;
  target = randomNumber(min.value, max.value);
  document.getElementById("answer").innerText = target; //for testing purposes
  guesses = 0;
  message = "Guess the number!";
  
  
  var div = document.getElementById("list");
  div.innerHTML= ""
    
  // list.value=""

}

function go() {
  // increment the number of guesses
  guesses++;
  // retrieve the guess from the form
  guess = document.getElementById("guess").value;
  // check if the guess is too large, small or correct
  if (guess > target) {
    message = "Your guess of " + guess + " was too big.";
  } else if (guess < target) {
    message = "Your guess of " + guess + " was too small.";
  } else {
    message = "Correct! You took " + guesses + " guesses.";
  }
  // modify the display text
  //var xx=document.getElementById("list")
  //xx[0]="aas"

  document.getElementById("displaytext").innerText = message;

  document.getElementById("list").innerHTML += '<h2>' + guess +' </h2>'

}



function myyFunction() {
  var x = document.getElementById("alll");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myyyFunction() {
  var x = document.getElementById("allll");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
