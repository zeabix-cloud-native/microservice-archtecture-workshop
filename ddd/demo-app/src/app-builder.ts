import MemberBuilder from "./domain/builder/MemberBuilder";


/**
 * How to use Builder pattern to create object/entities
 */
const member = MemberBuilder.builder()
                    .username('demo')
                    .firstname('John')
                    .lastname('snow')
                    .address('101 winterfell', 'winterfell', 'north', '10100')
                    .build();

console.log(`id: ${member.id}`)
console.log(`usename: ${member.username}`)
console.log(`firstname: ${member.firstname}`)
console.log(`lastname: ${member.lastname}`)
console.log(`address: ${member.address.streetAddress}, city: ${member.address.city}, province: ${member.address.province}, zipcode: ${member.address.zipcode}`)

