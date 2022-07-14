export class Product {
    id:string="";
    sku: string ="";
    name: string ="";
    description: string ="";
    unitPrice: number =0;
    imageUrl: string ="";
    active: boolean =true;
    unitsInStock: number =0;
    dateCreated!: Date;
    lastUpdated!: Date;
   
}
