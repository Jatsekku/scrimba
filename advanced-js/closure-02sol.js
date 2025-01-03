function createBankAccount() {
  let balance = 0
  return {
    deposeMoney: function(money) {
      balance += money
    },
    
    withdrawMoney: function(money) {
      balance -= money
    },
    
    getBalance: function() {
      console.log(balance)
    }
  }
}

const daveAccount = createBankAccount()
const wendyAccount = createBankAccount()

daveAccount.deposeMoney(50)
daveAccount.withdrawMoney(25)
daveAccount.getBalance()

wendyAccount.deposeMoney(500)
wendyAccount.withdrawMoney(250)
wendyAccount.getBalance()
