function scorePoint(playerName) {
    let score = 0
    return {
        displayScore: function () {
            console.log(`${playerName} has ${score} points`)
        },

        incrementScore: function() {
            score++
        },

        decrementScore: function() {
            score--
        },
    }
}

const player1 = scorePoint('Vicky')
player1.incrementScore()
player1.incrementScore()
player1.incrementScore()
player1.displayScore()
player1.decrementScore()
player1.displayScore()

const player2 = scorePoint('Leo')
player2.incrementScore()
player2.incrementScore()
player2.displayScore()
