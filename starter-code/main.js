var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');
function createCards() {
for (var i = 0; i < 4; i++) {
var newCard = document.createElement('div');
newCard.className = 'card';
gameBoard.appendChild(newCard);}
}

createCards();

/*if (cardOne === cardTwo) {
	//|| (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};*/

