/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
	function createCards() {
		for (var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
		newCard.addEventListener('click', isTwoCards);
	}
}

createCards();

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img src="king_hearts.png" alt="King of Hearts" />';
		} else {
			this.innerHTML = '<img src="queen_clubs.png" alt="Queen of Clubs" />';
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
	}
}


function isMatch(cards) {
		if (cards[0] === cards[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		} 
}
