import Account from "./domain/services/Account";
import AccountService from "./domain/services/AccountService"


const acc = new Account();

console.log(`Deposit to account: ${acc.accountNumber}`)
AccountService.deposit(acc, 1000);
console.log(`Account balance: ${acc.balance}`)

console.log(`Withdraw from account: ${acc.accountNumber}`)
AccountService.withdraw(acc, 500);
console.log(`Account balance: ${acc.balance}`)

// Freeze Account
console.log('------------------------------------------')
console.log('Freeze Account')
AccountService.freeze(acc)
console.log(`Deposit to account: ${acc.accountNumber}`)
AccountService.deposit(acc, 1000);
console.log(`Account balance: ${acc.balance}`)

// Unfreeze Account
console.log('------------------------------------------')
console.log('Unfreeze Account')
AccountService.unfreeze(acc)
console.log(`Deposit to account: ${acc.accountNumber}`)
AccountService.deposit(acc, 1000);
console.log(`Account balance: ${acc.balance}`)

console.log(`Withdraw from account: ${acc.accountNumber}`)
AccountService.withdraw(acc, 500);
console.log(`Account balance: ${acc.balance}`)