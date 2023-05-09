"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InternalUser_1 = require("./InternalUser");
const PartnerUser_1 = require("./PartnerUser");
class UserFactory {
    static createUser(type) {
        if (type === 'internal') {
            return new InternalUser_1.InternalUser();
        }
        else if (type === 'partner') {
            return new PartnerUser_1.PartnerUser();
        }
        return null;
    }
}
exports.default = UserFactory;
