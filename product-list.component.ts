import {Component, OnInit } from '@angular/core';
import { IProduct, Product} from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers:[ProductService]
})
export class productListComponent implements OnInit{
    
    pageTitle:string='Product List!';
    imageWidth:number=30;
    imageMargin:number=2;
    showImage:boolean=false;
    ErrorMessage:string;

   private _listFilter:string;
   

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts=this.filtereProducts(value);
    }
    filteredProducts:IProduct[];
    products: IProduct[]; 
    
constructor(private _ProductService:ProductService,private _router:Router){
}
onRatingClicked(message: string): void{
    this.pageTitle='Product List: ' +message;
}
filtereProducts(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((Product:IProduct)=>Product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

}
    toggleImage():void{
        this.showImage=!this.showImage
    }
    
    ngOnInit():void{this._ProductService.getProducts().subscribe({
        next:products=>{
            this.products=products
            this.filteredProducts=this.products;
        },
        error:err=>this.ErrorMessage=err
        
    });
        
        
        
       
    }
   
}
