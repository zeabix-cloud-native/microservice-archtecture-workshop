import Address from "./Address";
import Member from "./Member";


export default class MemberBuilder {

    // The difference between Builder and Factory is that the
    // Builder holding the Object
    member: Member

    private constructor(){
        this.member = new Member();
    }

    public static builder(){
        return new MemberBuilder();
    }

    username(uname: string): MemberBuilder {
        this.member.setUsername(uname);
        return this;
    }

    firstname(fn: string): MemberBuilder {
        this.member.setFirstName(fn);
        return this;
    }

    lastname(ln: string): MemberBuilder {
        this.member.setLastName(ln);
        return this;
    }

    address(st: string, city: string, province: string, zipcode: string): MemberBuilder {
        this.member.setAddress(new Address(st, city, province, zipcode));
        return this;
    }

    build(): Member {
        return this.member;
    }
}