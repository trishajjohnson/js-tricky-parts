function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let hasWon = false;
    let count = 0;

    return function(guess) {
        if(hasWon) {
            return `The game is over, you already won!`;
        } else if(guess > answer) {
            count++;
            return `${guess} is too high!`;
        } else if(guess < answer) {
            count++;
            return `${guess} is too low!`;
        } else {
            count++;
            hasWon = true;
            return `You win! You found ${answer} in ${count} guesses.`;
        }
    }
}

module.exports = { guessingGame };
