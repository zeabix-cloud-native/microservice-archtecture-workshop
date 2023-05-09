import {v4 as uuidv4} from 'uuid';
import Address from './Address';

export default class Member {
    id: string
    username: string
    firstname: string
    lastname: string
    address: Address

    constructor(){
        this.id = uuidv4();
        this.username = '';
        this.firstname = '';
        this.lastname = '';
        this.address = null as unknown as Address
    }

    setUsername(uname: string): void {
        this.username = uname;
    }

    setFirstName(fn: string): void {
        this.firstname = fn;
    }

    setLastName(ln: string): void {
        this.lastname = ln;
    }

    setAddress(address: Address){
        this.address = address;
    }

    // Anti-Pattern
    // setZipCode(zipcode: string) {
    //    this.address.setZipCode(zipcode)
    // }
}