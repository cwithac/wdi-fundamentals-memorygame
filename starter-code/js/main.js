console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "queen";

var createCards = function(fullBoard) {

  for (var i = 0; i <= 3; i++) {
    document.getElementById('game-board')
    var fullBoard =  document.createElement('div');
    fullBoard.className = "card";
	document.getElementById('game-board').appendChild(fullBoard);
	};
}
createCards();


/*if (cardOne === cardThree) {
	alert("You found a match!");
} else if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("Sorry, try again.");
} else if (cardThree === cardFour) {
	alert("Sorry, try again."); 
}*/

