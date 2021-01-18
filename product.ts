export interface IProduct{
    name: string;
    productId:number;
    productName:string;
    productCode:string;
    price:number;
    discription:string;
     releasedate:string;
    starRating:number;
    imageUrl:string;

}
export class Product implements IProduct{
constructor (public productId:number,
    public productName:string,
    public productCode:string,
    public price:number,
    public discription:string,
    public releasedate:string,
    public starRating:number,
    public imageUrl:string
    ){}
    name: any;
    calculateDiscount(percent:number):number{
        return this.price-(this.price*percent/100);
    }
}