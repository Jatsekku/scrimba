function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

// Additional params passed to setTimeout will be propagated down to specified function call
setTimeout(logAnswer, 3000, "Lima", 10)
