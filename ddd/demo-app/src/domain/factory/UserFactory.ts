import { InternalUser } from "./InternalUser";
import { IUser } from "./IUser";
import { PartnerUser } from "./PartnerUser";


export default class UserFactory {
    public static createUser(type: string): IUser {
        if (type === 'internal'){
            return new InternalUser();
        } else if (type === 'partner') {
            return new PartnerUser();
        }

        return null as unknown as IUser;
    }
}