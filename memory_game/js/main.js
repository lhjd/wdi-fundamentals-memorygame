var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png',
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png',
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png',
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png',
}
];

var cardsInPlay = [];

var score = 0;

function flipCard() {
	var cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
			score++;
			updateScore();
		} else {
			alert('Sorry, try again.');
		}
	}	
}

function createBoard() {

	updateScore();

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


function updateScore() {

	document.getElementById('score').innerHTML = 'Score: ' + score;

}


function resetBoard() {

	cardsInPlay = [];
	score = 0;
	updateScore();

	var cardImages = document.getElementsByTagName('img');

 	for (var i=0; i < cardImages.length; i++) {
 		cardImages[i].setAttribute('src', 'images/back.png');
 	}

}

document.getElementById('reset-button').addEventListener('click', resetBoard);
createBoard();
