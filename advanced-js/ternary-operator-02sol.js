const playerGuess = 6
const correctAnswer = 6

const message = playerGuess > correctAnswer ? 'Too high!'
                : playerGuess < correctAnswer ? 'Too low!'
                : 'Correct!'

console.log(message)
