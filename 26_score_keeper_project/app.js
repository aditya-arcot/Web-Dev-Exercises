let newGame = true;
let maxScore = 0;

const maxScoreSelector = document.querySelector('#maxScoreSelector');
const maxScoreSelectorLabel = document.querySelector('label[for="maxScoreSelector"]');
const resetButton = document.querySelector('#resetButton');

const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const writeScores = () => {
    player1.display.innerText = player1.score;
    player2.display.innerText = player2.score;
}
const setScoringDisabled = (disabled) => {
    player1.button.disabled = disabled;
    player2.button.disabled = disabled;
}
const score = (player, opponent) => {
    if (newGame) {
        maxScore = parseInt(maxScoreSelector.value);
        maxScoreSelector.parentElement.classList.add('is-hidden');
        maxScoreSelectorLabel.classList.add('is-hidden');
        newGame = false;
    }
    player.score += 1
    writeScores();
    if (player.score === maxScore) {
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        setScoringDisabled(true)
    }
}
const reset = () => {
    newGame = true;
    maxScore = 0;

    maxScoreSelector.parentElement.classList.remove('is-hidden');
    maxScoreSelectorLabel.classList.remove('is-hidden');

    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger')
    }

    writeScores();
    setScoringDisabled(false);
}

player1.button.addEventListener('click', () => score(player1, player2))
player2.button.addEventListener('click', () => score(player2, player1))
resetButton.addEventListener('click', () => reset())
