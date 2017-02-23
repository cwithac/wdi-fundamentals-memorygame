/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var startGameButton = document.getElementById("start-game");
var gameBoard = document.getElementById('game-board');
	
function createCards() {
		for (var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
	console.log(newCard.getAttribute('data-card'));
		if (newCard.getAttribute('data-card') === 'king') {
			newCard.innerHTML = '<img src="king_hearts.png" alt="King of Hearts" />';
		} else {
			newCard.innerHTML = '<img src="queen_clubs.png" alt="Queen of Clubs" />';
		}
		newCard.className = 'card';
		newCard.setAttribute('id', 'cardId');
		gameBoard.appendChild(newCard);
		startGameButton.addEventListener('click', backOfCards);
		newCard.addEventListener('click', isTwoCards);
	}
}

createCards();

function backOfCards() {
		for (var i = 0; i < cards.length; i++) {
	var resetCards = document.querySelectorAll('.card')
	resetCards[i].innerHTML = '<img src="back_of_card.png" alt="Back Of Card" />';
	startGameButton.className = 'activated';
	startGameButton.textContent = "Click to Try Again!";
	}
}


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


