import { Product } from "../product/shared/model/product.model";
import { User } from "./user.model";

export class Orden{
    products: Product[];
    user: User;
}