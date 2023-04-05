import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  id : any ;
  data : any ;
  isLoading : boolean = false ;
  constructor(private _activatedRoute:ActivatedRoute, private productService:ProductService ) { }

    // GET   THE PRODUCT   BY  ID   THAT   GOT   FROM   URL
    getTheProduct(){
      this.isLoading = true

      this.productService.getProductById(this.id).subscribe({
        next:(res)=>{
        this.data = res
        this.isLoading = false
      }})
    }


  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get("id")

    this.getTheProduct()
  }



  }


