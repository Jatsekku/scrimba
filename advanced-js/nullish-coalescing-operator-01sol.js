function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0 
    return userBalance
}

const balance = fetchUserBalance()
const displayBalance = balance ?? "currently not available"

console.log(`Your balance is ${displayBalance}.`)
