import UserFactory from "./domain/factory/UserFactory";

const internal = UserFactory.createUser('internal');
console.log(internal.type());
console.log(internal.identifier());

const partner = UserFactory.createUser('partner');
console.log(partner.type())
console.log(partner.identifier())

