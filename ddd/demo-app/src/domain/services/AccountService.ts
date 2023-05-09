import Account from "./Account"
import AccountStatus from "./AccountStatus";

export default class AccountService {
    public static withdraw(acc: Account, amount: number){
        if (acc.status.status === 'NORMAL' && acc.balance >= amount) {
            acc.balance -= amount;
            console.log(`Account withdrawn ${amount}`);
        } else {
            console.log(`Account withdraw does not allow`);
        }
    }

    public static deposit(acc: Account, amount: number){
        if (acc.status.status === 'NORMAL') {
            acc.balance += amount;
            console.log(`Account deposit ${amount}`);
        } else {
            console.log(`Account deposit does not allow`);
        }
    }

    public static freeze(acc: Account){
        acc.status = new AccountStatus('FROZEN');
    }

    public static unfreeze(acc: Account) {
        acc.status = new AccountStatus('NORMAL');
    }
}