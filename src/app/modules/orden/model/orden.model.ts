import { Orden } from "./orden.interface";
import { Product } from "./product.interface";
import { User } from "./user.interface";
import { UserModel } from "./user.model";

export class OrdenModel implements Orden{

    id: number | null;
    pricezone: number;
    date: string;
    state: number;
    products: Product[] | [];
    user: User;
    total: number;

    constructor(){
        this.id = null;
        this.pricezone = 0;
        this.date = "";
        this.state = 0;
        this.products = [];
        this.user = new UserModel();
        this.total = 0;
    }

}