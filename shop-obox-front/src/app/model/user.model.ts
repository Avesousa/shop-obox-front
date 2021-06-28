import { Zone } from "./zone.model";

export class User {
    id?:string;
    name?:string;
    password?:string;
    doc?:number;
    mail?:string;
    street:string;
    number:string;
    zone:Zone;
}