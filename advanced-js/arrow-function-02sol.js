const speedWarning = (limit, speed) => {
   if (speed > limit) {
      return `You are going at ${speed} mph!`
   }
}

console.log(speedWarning(30, 40))
