export class ProductModel {
    id:number;
    ordenId: number;
    name:string;
    description:string;
    price:number;
    total:number;
    quantity:number;
    category:string;
    imagen:string;
    ext:string;
    state: number;

    constructor(){
        this.id = 0;
        this.ordenId =  0;
        this.name = "";
        this.description = "";
        this.price = 0;
        this.total = 0;
        this.quantity = 0;
        this.category = "";
        this.imagen = "";
        this.ext = "";
        this.state =  4;
    }
}