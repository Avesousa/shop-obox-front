export interface ProductInternal {
    id?:number | null;
    //code?:string;
    name?:string;
    description?:string;
    price?:number;
    priceSale?:number;
    quantity?:number;
    //inventoryStatus?:string;
    category:number;
    imagen?:string;
    ext?:string;
    rating?:number;
    sale?:number;
    file:File[];
}