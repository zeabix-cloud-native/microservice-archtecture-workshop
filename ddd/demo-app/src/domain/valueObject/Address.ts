

// Value Object does not have identifier
// It's immutable which mean it will not suppose to be modified once created
// To update the value, please recreate the new "Address" and replace the old one.
export class Address {
    streetAddress: string
    city: string
    province: string
    zipcode: string

    constructor(st: string, city: string, province: string, zipcode: string) {
        this.streetAddress = st;
        this.city = city;
        this.province = province;
        this.zipcode = zipcode
    }
}