import { IUser } from "./IUser"
import {v4 as uuidv4} from 'uuid';

export class PartnerUser implements IUser {
    name: string
    id: string

    constructor() { 
        this.name = '';
        this.id = uuidv4()
    }

    identifier() {
        return this.id;
    }

    type() {
        return "Partner User";
    }
}