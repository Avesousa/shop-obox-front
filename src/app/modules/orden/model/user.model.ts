export class UserModel {
    id?:number;
    name:string;
    mail:string;
    doc: number;
    street: string;
    streetNumber: string;

    constructor(){
        this.name = "";
        this.mail = "";
        this.doc = 0;
        this.street = "";
        this.streetNumber = "";
    }

}