console.log("Up and running!");
var cards = [
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/images/king-of-diamonds.png",
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/images/king-of-hearts.png",
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/images/queen-of-diamonds.png",	
	},
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/images/queen-of-hearts.png",	
	}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}	

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank + "of " + cards[cardId].suit);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]);
	alert("You found a match!");
	}
}	
checkForMatch();	



function createBoard() {
	for (var i = 0; i < cards.length; i++) {
 var cardElement = document.createElement('img');
 cardElement.setAttribute('src', 'images/images/back.png');
 cardElement.setAttribute('data-id', i);
 cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();