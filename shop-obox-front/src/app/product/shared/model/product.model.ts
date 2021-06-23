export interface Product {
    id?:number;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    priceSale?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    imagen?:string;
    ext?:string;
    rating?:number;
    sale?:number;
    quantyBuy?: 1 | number;
    totalBuy?: 0 | number;
}
