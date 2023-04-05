import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allProducts: product[] = []
  cateNames:string[] = []

  addedCart:any[] = []

  isLoading:boolean = false;
  constructor(private _productService:ProductService) { }





  // G  E  T    A L L   P R O D U C T S
  getProducts(){
    this.isLoading = true;

    this._productService.getAllProducts().subscribe({
      next:(res) => {
          this.allProducts = res
          this.isLoading = false;
      }
  })
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCateName()
  }

    // G  E  T    C A T E G O R I E S   N A M E

    getCateName(){
      this._productService.getCategoriesNames().subscribe({
         next:(res) => this.cateNames = res
      })
    }



    // A D D  T O   C A R D






    filteringProducts(e: any){
      let cate = e.target.value ;
      this.isLoading = true ;
      this._productService.filterCategory(cate).subscribe(
        {
          next:(res : any) =>{
             this.allProducts = res ;
             this.isLoading = false ;

          if(cate = 'all'){
             this._productService.getAllProducts().subscribe({
               next :(res : any) => this.addedCart = res
             })
          }

          }
        }
      )
    }



    // A D D    P R O D U D C T S T O      C A R D S


    addToCart(e:any){
       if(this.addedCart.find(item => item.item.id == e.item.id)){
         console.log("error")
       }else{
        this.addedCart.push(e);
        console.log("it ies addedd to card ")
       }

       localStorage.setItem('addToCard',JSON.stringify(this.addToCart))
    }
}
