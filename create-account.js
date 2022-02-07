function createAccount(pin, amount=0) {
    let balance = amount;
    let currentPin = pin;

    return {
        checkBalance: function(givenPin) {
            if(givenPin === currentPin) {
                return `$${balance}`;
            } else {
                return `Invalid PIN.`;
            }  
        },
        deposit: function(givenPin, amt) {
            if(givenPin !== currentPin) return `Invalid PIN.`;
            balance += amt;
            return `Succesfully deposited $${amt}. Current balance: $${balance}.`
        },
        withdraw: function(givenPin, amt) {
            if(givenPin !== currentPin) return `Invalid PIN.`;
            if(balance - amt < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            balance -= amt;
            return `Succesfully withdrew $${amt}. Current balance: $${balance}.`
        },
        changePin: function(givenPin, newPin) {
            if(givenPin !== currentPin) return `Invalid PIN.`;
            currentPin = newPin;
            return `PIN successfully changed!`;
        }
        

    }
}

module.exports = { createAccount };

const account = createAccount('2334', 500);

console.log(account.deposit('2334', 350));