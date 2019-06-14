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

function flipCard(cardId) {
	checkForMatch();
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]);
	alert("You found a match!");
}
	else {
	alert("Sorry, try again.");
	} 	

console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}

	flipCard(0);
	flipCard(2);
