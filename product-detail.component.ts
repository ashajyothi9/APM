import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string='product Detail';
  product:any;
 filteredProducts: IProduct[];
 listFilter: string;
  products: any;

  
  constructor(private route:ActivatedRoute,private router:Router,private productServices:ProductService ) { }

  ngOnInit() {
  
    // this.products=this.productServices.getProducts()
    
  
    // this.filteredProducts=this.products; 
      let  id=+this.route.snapshot.paramMap.get('id');
      this.pageTitle+= `: ${id}`;
      this.products=[
        {
            "productId":1,
            "productName":"activa",
            "productCode":"qwe:333",
            "price":36,
            "discription":"its block color,fashion for girls",
            "releasedate":"april 4, 2020",
            "starRating":5,
            "imageUrl":"assets/activa.jpg"
        },
        {
            "productId":2,
            "productName":"kurthi",
            "productCode":"qwe-34",
           "price":6,
           "discription":"its pink and white colored  kurthi,fashion for girls",
            "releasedate":"may 4, 2020",
            "starRating":4,
            "imageUrl":"assets/kurthi.jpg"
        },
        {
            "productId":3,
            "productName":"iphone",
            "productCode":"apm:333",
            "price":36,
            "discription":"its block colored iphone,fashion for all",
            "releasedate":"april 24 ,2020",
            "starRating":5,
            "imageUrl":"assets/iphone.jpg"
        }
    ]
this.product=this.products.find(x=> x.productId==id)


     }

  private newMethod(): any {
    return +this.route.snapshot.params['id'];
  }

  onBack():void{
    this.router.navigate(['/products']);
  }  

}