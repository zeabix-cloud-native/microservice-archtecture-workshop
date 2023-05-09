import { IUser } from "./IUser"
import {v4 as uuidv4} from 'uuid';

export class InternalUser implements IUser {
    // Entities always have identifier
    id: string
    name: string

    constructor() { 
        this.name = '' 
        this.id = uuidv4()
    
    }

    identifier() {
        return this.id;
    }

    type() {
        return "Internal User";
    }
}