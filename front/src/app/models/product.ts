export class Product{
    _id? : number;
    name : String;
    type: String;
    description : String;
    price : String;


    constructor(name: string, type:string, description: string, price: string){
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}