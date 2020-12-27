let playerScore = 0;
let computerScores = 0;
const button = document.querySelectorAll('button');

function computerPlay() {
	let choices = ['batu', 'kertas', 'gunting'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
	button.forEach(elem => {
		elem.disabled = true;
	})

}

function reload() {

}

function playRound(playerSelection) {
	let computerSelection = computerPlay();
	let result = '';

	if ((playerSelection == 'batu' && computerSelection == 'gunting') || (playerSelection == 'gunting' && computerSelection == 'kertas') || (playerSelection == 'kertas' && computerSelection == 'batu')) {
			playerScore += 1;
			result = (`Kamu menang <br>${playerSelection} melawan ${computerSelection} <br><br> Player score : ${playerScore} dan Computer score : ${computerScores}`);
			
			if (playerScore == 5) {
				result += '<br><br> Kamu memenangkan permainan. Silahkan muat ulang untuk memulai lagi';
				disableButtons();
			}			
	} else if (playerSelection == computerSelection) {
		result = (`Seri <br> Kalian berdua memilih ${playerSelection} <br><br> Player score : ${playerScore} dan Computer score : ${computerScores}`);
	} else {
		computerScores += 1;
		result = (`Kamu kalah <br>${playerSelection} melawan ${computerSelection} <br><br> Player score : ${playerScore} dan Computer score : ${computerScores}`);

		if (computerScores == 5) {
			result += '<br><br> Computer memenangkan permainan. Silahkan muat ulang untuk memulai lagi';
			disableButtons();	
		}
	}

	document.getElementById('result').innerHTML = result;
	return
}

button.forEach(button => {
	button.addEventListener('click', function() {
		playRound(button.value);
	})
})