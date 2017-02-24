//wdi-fundamentals memory game

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');
var allCards = document.getElementsByClassName('card');

//creates new set of div cards within gameBoard div face up first
//sends to isTwoCards upon clicking a card
function createBoard() {
		for (var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
	// console.log(newCard.getAttribute('data-card'));
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
		newCard.addEventListener('click', isTwoCards);
	}
};
//activates createBoard function
createBoard();

//assigns image based on data-card
//sends to ifMatch if two cards have been played
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	// console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img src="king_hearts.png" alt="King of Hearts" />';
		} else {
			this.innerHTML = '<img src="queen_clubs.png" alt="Queen of Clubs" />';
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
	}
};

//checks to see if two cards match, alerts if/else
//sends to resetGame after alert
function isMatch(cards) {
	  if (cards[0] === cards[1]) {
	    alert("You found a match!");
		} else {
	    alert("Sorry, try again.");
		}
		resetGame();
};

//resets cards to 'back', clearing HTML
function resetGame() {
var allCards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
	allCards[i].innerHTML = '';
	}
}


//notes :
// single card double clicked = match
// time out function for second card to show face?
// keep track of score? reset with score?
