const raven = document.getElementById('raven');
const gameOver = document.getElementById('game-over');
let gameStarted = false;
let gameStopped = false;

// start the game
window.addEventListener('keydown', (event) => {
	if (event.keyCode === 32 && !gameStarted) {
		gameStarted = true;
		// move raven up and down
		const flyUp = setInterval(() => {
			if (parseInt(getComputedStyle(raven).bottom) < 300) {
				raven.style.bottom = (parseInt(getComputedStyle(raven).bottom) + 10) + 'px';
			}
		}, 50);
		const flyDown = setInterval(() => {
			if (parseInt(getComputedStyle(raven).bottom) > 0) {
				raven.style.bottom = (parseInt(getComputedStyle(raven).bottom) - 10) + 'px';
			} else {
				// stop the game
				clearInterval(flyUp);
				clearInterval(flyDown);
				gameStopped = true;
				gameOver.style.display = 'block';
			}
		}, 50);
	}
});

// restart the game
window.addEventListener('keydown', (event) => {
	if (event.keyCode === 82 && gameStopped) {
		location.reload();
	}
});
