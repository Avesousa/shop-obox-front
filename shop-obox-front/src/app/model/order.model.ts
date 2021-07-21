import { Product } from "../product/shared/model/product.model";
import { User } from "./user.model";

export class Order{
    products: Product[];
    user: User;
}