import {v4 as uuidv4} from 'uuid';
import AccountStatus from './AccountStatus';

export default class Account {
    accountNumber: string
    status: AccountStatus
    balance: number

    constructor() {
        this.accountNumber = uuidv4();
        this.status = new AccountStatus('NORMAL');
        this.balance = 0.0
    }

}