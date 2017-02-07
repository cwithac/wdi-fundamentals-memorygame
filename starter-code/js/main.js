console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

if (cardOne === cardThree) {
	alert("You found a match!");
} else if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("Sorry, try again.");
} else if (cardThree === cardFour) {
	alert("Sorry, try again."); 
}


