//Singleton service
export class Cart{

    private static instance: Cart;
    private count: number;

    private constructor(count:number){ 
        this.count = count;
    }

    public static getInstance(): Cart{
        if(!Cart.instance){
            Cart.instance = new Cart(0);
        } 
        return this.instance
    }

    public updateCount():void {
        this.count = JSON.parse(localStorage.getItem('products')).length;
        console.log(this.count);  
    }

    public getCount():number {
        return this.count;
    }

}