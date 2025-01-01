function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0 
    return userBalance
}

/*
Challenge:
    1. Swap the logical OR operator for a Nullish Coalescing operator.
    Ignore any red lines you see in the editor!
*/

const balance = fetchUserBalance()
const displayBalance = balance || "currently not available"

console.log(`Your balance is ${displayBalance}.`)
