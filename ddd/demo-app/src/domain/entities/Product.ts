import {v4 as uuidv4} from 'uuid';

export class Product {
    // Entities always have identifier
    id: string
    name: string
    description: string
    price: number

    constructor(){
        // The unique identifier for this entities use
        // Application generated identity approach
        this.id = uuidv4();
        this.name = '';
        this.description = '';
        this.price = 0.0
    }

    // Entities can be modified (except identifier)
    // Generally the setXXX() method should be provided
    setName(name: string): void {
        this.name = name;
    }

    setDescription(desc: string): void {
        this.description = desc;
    }

    setPrice(price: number): void {
        this.price = price
    }
}