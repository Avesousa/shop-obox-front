export interface Product {
    id?:number;
    ordenId?: number;
    name?:string;
    description?:string;
    price?:number;
    total?:number;
    quantity?:number;
    category?:string;
    imagen?:string;
    ext?:string;
    state: number;
}